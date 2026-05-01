import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';

export default function NotFound(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-20 md:px-6">
      <SEOHead title="Page Not Found | Murray Legal" description="The requested page was not found." canonical={`${SITE_URL}/404`} robots="noindex, nofollow" />
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-5xl text-navy">Page Not Found</h1>
        <p className="mt-4 text-text-muted">The URL you entered is unavailable. Please navigate using the verified site sections.</p>
        <Link to="/" ariaLabel="Return Home" className="btn-primary mt-8 inline-block">Return to Homepage</Link>
      </section>
    </main>
  );
}
