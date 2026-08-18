import SEOHead from '../components/SEOHead';
import Container from '../components/Container';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';

export default function NotFound(): JSX.Element {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-ink py-24 text-paper">
      <SEOHead title="Page Not Found | Murray Legal" description="The requested page was not found." canonical={`${SITE_URL}/404`} robots="noindex, follow" />
      <Container><section className="max-w-3xl"><p className="eyebrow">Error 404</p><h1 className="mt-5 font-display text-display-xl text-paper">Page Not Found</h1><p className="mt-6 text-lg leading-8 text-stone">The requested page is unavailable or may have moved. Return to the firm overview or explore current legal insights.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/" ariaLabel="Return home" className="btn-primary">Return home</Link><Link to="/insights" ariaLabel="Browse legal insights" className="btn-outline">Browse insights</Link></div></section></Container>
    </main>
  );
}
