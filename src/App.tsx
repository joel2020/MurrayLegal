import { useEffect, useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { usePathname } from './lib/router';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Home from './pages/Home';
import IndustryPage from './pages/IndustryPage';
import NotFound from './pages/NotFound';
import PracticeAreaPage from './pages/PracticeAreaPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { industryBySlug } from './data/industries';
import { practiceAreas } from './data/practiceAreas';

const practiceRoutes = Object.fromEntries(
  practiceAreas.flatMap((area) => {
    const canonicalPath = `/practice-areas/${area.slug}`;
    const paths = [canonicalPath, ...area.legacyPaths];
    return paths.map((path) => [
      path,
      <PracticeAreaPage key={path} slug={area.slug} canonicalPath={canonicalPath} />,
    ]);
  }),
);

const routes: Record<string, JSX.Element> = {
  '/': <Home />,
  '/insights': <Blog />,
  '/blog': <Blog />,
  '/about': <About />,
  '/contact': <Contact />,
  '/disclaimer': <Disclaimer />,
  '/privacy-policy': <PrivacyPolicy />,

  ...practiceRoutes,

  ...Object.fromEntries(Object.values(industryBySlug).map((industry) => [`/industries/${industry.slug}`, <IndustryPage key={industry.slug} industry={industry} />])),
};

export default function App(): JSX.Element {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const isInsightDetail = pathname.startsWith('/insights/') || pathname.startsWith('/blog/');
  const page = isInsightDetail ? <BlogPost /> : routes[pathname] ?? <NotFound />;

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    window.requestAnimationFrame(() => {
      document.getElementById('main-content')?.focus({ preventScroll: true });
    });
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <div id="main-content" tabIndex={-1}>{page}</div>
      <Footer />
    </>
  );
}
