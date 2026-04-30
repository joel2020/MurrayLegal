import Header from './components/Header';
import Footer from './components/Footer';
import { Link, usePathname } from './lib/router';
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import LandUse from './pages/LandUse';
import CommercialRE from './pages/CommercialRE';
import ResidentialRE from './pages/ResidentialRE';
import CorporateLaw from './pages/CorporateLaw';
import CorporateGovernance from './pages/CorporateGovernance';
import CivilLitigation from './pages/CivilLitigation';
import BusinessDisputes from './pages/BusinessDisputes';
import PersonalInjury from './pages/PersonalInjury';
import EntertainmentLaw from './pages/EntertainmentLaw';
import SportsTransactions from './pages/SportsTransactions';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PennsylvaniaServices from './pages/PennsylvaniaServices';

function NotFound(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-24 text-center">
      <h1 className="font-display text-5xl text-navy">Page Not Found</h1>
      <p className="mx-auto mt-4 max-w-lg text-text-muted">The page you requested could not be located.</p>
      <Link to="/" ariaLabel="Return home" className="mt-8 inline-block rounded-sm bg-gold px-5 py-3 font-semibold text-navy">
        Return Home
      </Link>
    </main>
  );
}

export default function App(): JSX.Element {
  const pathname = usePathname();

  if (pathname === '/blog') return (<><Header /><Blog /><Footer /></>);
  if (pathname.startsWith('/blog/')) return (<><Header /><BlogPost /><Footer /></>);

  if (
    pathname.startsWith('/pennsylvania') ||
    pathname.startsWith('/philadelphia-real-estate-attorney')
  ) {
    return (<><Header /><PennsylvaniaServices /><Footer /></>);
  }

  const pageMap: Record<string, JSX.Element> = {
    '/': <Home />,
    '/real-estate-attorney': <RealEstate />,
    '/real-estate-attorney/land-use-zoning': <LandUse />,
    '/real-estate-attorney/commercial-transactions': <CommercialRE />,
    '/real-estate-attorney/residential-transactions': <ResidentialRE />,
    '/corporate-law': <CorporateLaw />,
    '/corporate-law/corporate-governance': <CorporateGovernance />,
    '/civil-litigation': <CivilLitigation />,
    '/civil-litigation/business-disputes': <BusinessDisputes />,
    '/civil-litigation/personal-injury': <PersonalInjury />,
    '/entertainment-law': <EntertainmentLaw />,
    '/sports-transactions': <SportsTransactions />,
    '/faq': <FAQ />,
    '/contact': <Contact />,
    '/about': <About />,
    '/disclaimer': <Disclaimer />,
  };

  return (
    <>
      <Header />
      {pageMap[pathname] ?? <NotFound />}
      <Footer />
    </>
  );
}
