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

const routes: Record<string, JSX.Element> = {
  '/': <Home />,
  '/insights': <Blog />,
  '/blog': <Blog />,
  '/about': <About />,
  '/contact': <Contact />,
  '/disclaimer': <Disclaimer />,
  '/privacy-policy': <PrivacyPolicy />,

  '/practice-areas/corporate-law': <PracticeAreaPage slug="corporate-law" canonicalPath="/practice-areas/corporate-law" />,
  '/practice-areas/real-estate': <PracticeAreaPage slug="real-estate" canonicalPath="/practice-areas/real-estate" />,
  '/practice-areas/civil-litigation': <PracticeAreaPage slug="civil-litigation" canonicalPath="/practice-areas/civil-litigation" />,
  '/practice-areas/entertainment-transactions': <PracticeAreaPage slug="entertainment-transactions" canonicalPath="/practice-areas/entertainment-transactions" />,
  '/practice-areas/sports-transactions': <PracticeAreaPage slug="sports-transactions" canonicalPath="/practice-areas/sports-transactions" />,
  '/practice-areas/intellectual-property': <PracticeAreaPage slug="intellectual-property" canonicalPath="/practice-areas/intellectual-property" />,
  '/practice-areas/trusts-wills-estates': <PracticeAreaPage slug="trusts-wills-estates" canonicalPath="/practice-areas/trusts-wills-estates" />,
  '/practice-areas/divorce-family-law': <PracticeAreaPage slug="divorce-family-law" canonicalPath="/practice-areas/divorce-family-law" />,

  ...Object.fromEntries(Object.values(industryBySlug).map((industry) => [`/industries/${industry.slug}`, <IndustryPage key={industry.slug} industry={industry} />])),

  '/real-estate-attorney': <PracticeAreaPage slug="real-estate" canonicalPath="/practice-areas/real-estate" />,
  '/corporate-law': <PracticeAreaPage slug="corporate-law" canonicalPath="/practice-areas/corporate-law" />,
  '/civil-litigation': <PracticeAreaPage slug="civil-litigation" canonicalPath="/practice-areas/civil-litigation" />,
  '/business-attorney': <PracticeAreaPage slug="corporate-law" canonicalPath="/practice-areas/corporate-law" />,
  '/contract-disputes': <PracticeAreaPage slug="civil-litigation" canonicalPath="/practice-areas/civil-litigation" />,
};

export default function App(): JSX.Element {
  const pathname = usePathname();
  const isInsightDetail = pathname.startsWith('/insights/') || pathname.startsWith('/blog/');
  const page = isInsightDetail ? <BlogPost /> : routes[pathname] ?? <NotFound />;

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <div id="main-content" tabIndex={-1}>{page}</div>
      <Footer />
    </>
  );
}
