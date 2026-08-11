import json
import os
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("SITE_URL", "https://murraylegalfirm.com")
ARTIFACTS = Path("artifacts/site-audit")
ROUTES = [
    "/",
]


def audit_viewport(browser, name, viewport, is_mobile=False):
    context = browser.new_context(viewport=viewport, is_mobile=is_mobile)
    page = context.new_page()
    console_errors = []
    page_errors = []
    failed_requests = []
    bad_responses = []

    page.on(
        "console",
        lambda message: console_errors.append(message.text)
        if message.type == "error"
        else None,
    )
    page.on("pageerror", lambda error: page_errors.append(str(error)))
    page.on(
        "requestfailed",
        lambda request: failed_requests.append(
            {"url": request.url, "failure": request.failure}
        ),
    )
    page.on(
        "response",
        lambda response: bad_responses.append(
            {"url": response.url, "status": response.status}
        )
        if response.status >= 400
        else None,
    )

    routes = []
    for route in ROUTES:
        print(f"[{name}] checking {route}", flush=True)
        response = page.goto(
            f"{BASE_URL}{route}", wait_until="domcontentloaded", timeout=15_000
        )
        page.wait_for_timeout(300)
        routes.append(
            {
                "route": route,
                "status": response.status if response else None,
                "url": page.url,
                "title": page.title(),
                "h1": page.locator("h1").first.text_content()
                if page.locator("h1").count()
                else None,
                "horizontal_overflow": page.evaluate(
                    "document.documentElement.scrollWidth > document.documentElement.clientWidth"
                ),
            }
        )

    print(f"[{name}] inspecting contact form", flush=True)
    page.evaluate("document.querySelector('a[href=\"/contact\"]').click()")
    page.wait_for_timeout(300)
    form = page.locator("form").first
    button = form.get_by_role("button", name="Contact Murray Legal")
    intake_requests = []
    page.on(
        "request",
        lambda request: intake_requests.append(
            {"method": request.method, "url": request.url}
        )
        if "/api/intake" in request.url
        else None,
    )

    url_before_click = page.url
    print(f"[{name}] clicking consultation button", flush=True)
    button_count = button.count()
    if button_count:
        button.click(timeout=2_000)
        page.wait_for_timeout(500)
    contact_form = {
        "rendered": form.count() > 0,
        "method": form.get_attribute("method"),
        "action": form.get_attribute("action"),
        "button_type": button.get_attribute("type") if button_count else None,
        "url_changed": page.url != url_before_click,
        "intake_requests": intake_requests,
        "status_messages": page.locator('[role="status"], [role="alert"]').all_text_contents(),
    }
    page.screenshot(path=str(ARTIFACTS / f"{name}-contact.png"), full_page=True)

    print(f"[{name}] capturing homepage", flush=True)
    page.goto(BASE_URL, wait_until="domcontentloaded", timeout=15_000)
    page.wait_for_timeout(300)
    if is_mobile:
        page.get_by_role("button", name="Toggle mobile menu").click()
    page.screenshot(path=str(ARTIFACTS / f"{name}-home.png"), full_page=True)

    result = {
        "viewport": name,
        "routes": routes,
        "contact_form": contact_form,
        "console_errors": console_errors,
        "page_errors": page_errors,
        "failed_requests": failed_requests,
        "bad_responses": bad_responses,
    }
    context.close()
    return result


def main():
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    requested_viewport = sys.argv[1] if len(sys.argv) > 1 else "desktop"
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        if requested_viewport == "mobile":
            results = [audit_viewport(
                browser,
                "mobile",
                {"width": 390, "height": 844},
                is_mobile=True,
            )]
        else:
            results = [
                audit_viewport(browser, "desktop", {"width": 1440, "height": 900})
            ]
        browser.close()
    print(json.dumps(results, indent=2))


if __name__ == "__main__":
    main()
