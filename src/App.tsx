import Header from './components/Header';
import Footer from './components/Footer';
import { usePathname } from './lib/router';
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import CorporateLaw from './pages/CorporateLaw';
import CivilLitigation from './pages/CivilLitigation';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NationalServices, { nationalServicePaths } from './pages/PennsylvaniaServices';

export default function App(): JSX.Element {
  const pathname = usePathname();

  if (pathname === '/blog') return (<><Header /><Blog /><Footer /></>);
  if (pathname.startsWith('/blog/')) return (<><Header /><BlogPost /><Footer /></>);

  if (nationalServicePaths.includes(pathname)) {
    return (<><Header /><NationalServices /><Footer /></>);
  }

  const pageMap: Record<string, JSX.Element> = {
    '/': <Home />,
    '/real-estate-attorney': <RealEstate />,
    '/corporate-law': <CorporateLaw />,
    '/civil-litigation': <CivilLitigation />,
    '/faq': <FAQ />,
    '/contact': <Contact />,
    '/about': <About />,
    '/disclaimer': <Disclaimer />,
    '/business-attorney': <NationalServices />,
    '/contract-disputes': <NationalServices />,
  };

  return (
    <>
      <Header />
      {pageMap[pathname] ?? <div>Not Found</div>}
      <Footer />
    </>
  );
}
