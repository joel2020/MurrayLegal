import SEOHead from '../components/SEOHead';
import Container from '../components/Container';
import ActionLink from '../components/ActionLink';
import { SITE_URL } from '../lib/firm';

export default function NotFound(): JSX.Element {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-ink py-24 text-paper">
      <SEOHead title="Page Not Found | Murray Legal" description="The requested page was not found." canonical={`${SITE_URL}/404`} robots="noindex, follow" />
      <Container><section className="max-w-3xl border-l-[6px] border-gold pl-6 sm:pl-10"><p className="eyebrow">Error 404</p><h1 className="mt-5 font-display text-display-xl text-paper">Page Not Found</h1><p className="mt-6 text-lg leading-8 text-stone">The requested page is unavailable or may have moved. Return to the firm overview or request a consultation.</p><div className="mt-8 flex flex-wrap gap-3"><ActionLink to="/" ariaLabel="Return home">Return home</ActionLink><ActionLink to="/contact" ariaLabel="Request a consultation" variant="outline">Request a consultation</ActionLink></div></section></Container>
    </main>
  );
}
