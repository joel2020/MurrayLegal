import json
import os
import unittest
import xml.etree.ElementTree as ElementTree

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("SITE_URL", "http://127.0.0.1:4173")

CANONICAL_ROUTES = [
    "/about",
    "/contact",
    "/insights",
    "/privacy-policy",
    "/disclaimer",
    "/practice-areas/corporate-law",
    "/practice-areas/real-estate",
    "/practice-areas/civil-litigation",
    "/practice-areas/entertainment-transactions",
    "/practice-areas/sports-transactions",
    "/practice-areas/intellectual-property",
    "/practice-areas/trusts-wills-estates",
    "/practice-areas/divorce-family-law",
    "/industries/businesses-founders",
    "/industries/real-estate-investors",
    "/industries/entertainment-professionals",
    "/industries/athletes-sports-organizations",
    "/industries/high-net-worth-individuals",
    "/insights/business-contract-red-flags-executives-should-review-before-signing",
    "/insights/commercial-real-estate-due-diligence-checklist",
    "/insights/what-to-do-when-a-business-contract-is-breached",
    "/insights/entertainment-contract-red-flags-for-creators-and-producers",
    "/insights/athlete-endorsement-agreement-red-flags",
    "/insights/trademark-vs-copyright-what-business-owners-need-to-know",
    "/insights/estate-planning-checklist-for-executives-and-business-owners",
    "/insights/high-net-worth-divorce-legal-and-financial-issues-to-consider",
    "/insights/what-should-be-included-in-a-shareholder-agreement",
]


class SiteRegressionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(headless=True)

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()

    def setUp(self):
        self.context = self.browser.new_context(
            viewport={"width": 1440, "height": 900}
        )
        self.page = self.context.new_page()

    def tearDown(self):
        self.context.close()

    def test_direct_contact_route_renders_the_contact_page(self):
        response = self.page.goto(
            f"{BASE_URL}/contact", wait_until="domcontentloaded", timeout=15_000
        )

        self.assertIsNotNone(response)
        self.assertEqual(response.status, 200)
        self.assertEqual(
            self.page.get_by_role("heading", name="Schedule a Consultation").first.text_content(),
            "Schedule a Consultation",
        )

    def test_all_canonical_subpages_return_success(self):
        for route in CANONICAL_ROUTES:
            with self.subTest(route=route):
                response = self.context.request.get(f"{BASE_URL}{route}")
                self.assertEqual(response.status, 200)

    def test_sitemap_contains_every_canonical_subpage(self):
        response = self.context.request.get(f"{BASE_URL}/sitemap.xml")
        self.assertEqual(response.status, 200)

        root = ElementTree.fromstring(response.text())
        namespace = {"sitemap": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        actual_urls = {
            element.text
            for element in root.findall("sitemap:url/sitemap:loc", namespace)
        }
        expected_urls = {f"https://murraylegalfirm.com{route}" for route in CANONICAL_ROUTES}
        self.assertEqual(expected_urls - actual_urls, set())

    def test_contact_form_posts_intake_and_confirms_success(self):
        captured_payloads = []

        def fulfill_intake(route):
            captured_payloads.append(json.loads(route.request.post_data))
            route.fulfill(
                status=200,
                content_type="application/json",
                body=json.dumps({"ok": True}),
            )

        self.page.route("**/api/intake", fulfill_intake)
        self.page.goto(BASE_URL, wait_until="domcontentloaded", timeout=15_000)
        self.page.evaluate("document.querySelector('a[href=\"/contact\"]').click()")
        self.assertEqual(self.page.locator('input[name="consent"]').count(), 1)

        values = {
            "name": "Regression Test",
            "email": "regression@example.com",
            "phone": "9145550100",
            "company": "Test Company",
            "practiceArea": "Corporate Law",
            "jurisdiction": "New York",
            "urgency": "Routine",
            "contactMethod": "Email",
            "matterDescription": "Automated regression test.",
        }
        for field, value in values.items():
            self.page.locator(f'[name="{field}"]').fill(value)
        self.page.locator('input[name="consent"]').check()

        self.page.get_by_role("button", name="Contact Murray Legal").click()
        self.page.get_by_role("status").wait_for(timeout=5_000)

        self.assertEqual(len(captured_payloads), 1)
        self.assertEqual(captured_payloads[0]["name"], "Regression Test")
        self.assertEqual(captured_payloads[0]["email"], "regression@example.com")
        self.assertEqual(captured_payloads[0]["pageUrl"], f"{BASE_URL}/contact")
        self.assertIn(
            "Thank you",
            self.page.get_by_role("status").text_content(),
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)
