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

  '/industries/businesses-founders': <IndustryPage title="Businesses & Founders" slug="businesses-founders" links={[{ name: 'Corporate Law', slug: 'corporate-law' }, { name: 'Civil Litigation', slug: 'civil-litigation' }, { name: 'Intellectual Property', slug: 'intellectual-property' }, { name: 'Real Estate', slug: 'real-estate' }]} />,
  '/industries/real-estate-investors': <IndustryPage title="Real Estate Investors" slug="real-estate-investors" links={[{ name: 'Real Estate', slug: 'real-estate' }, { name: 'Corporate Law', slug: 'corporate-law' }, { name: 'Civil Litigation', slug: 'civil-litigation' }]} />,
  '/industries/entertainment-professionals': <IndustryPage title="Entertainment Professionals" slug="entertainment-professionals" links={[{ name: 'Entertainment Transactions', slug: 'entertainment-transactions' }, { name: 'Intellectual Property', slug: 'intellectual-property' }, { name: 'Civil Litigation', slug: 'civil-litigation' }]} />,
  '/industries/athletes-sports-organizations': <IndustryPage title="Athletes & Sports Organizations" slug="athletes-sports-organizations" links={[{ name: 'Sports Transactions', slug: 'sports-transactions' }, { name: 'Intellectual Property', slug: 'intellectual-property' }, { name: 'Civil Litigation', slug: 'civil-litigation' }]} />,
  '/industries/high-net-worth-individuals': <IndustryPage title="High-Net-Worth Individuals" slug="high-net-worth-individuals" links={[{ name: 'Trusts, Wills & Estates', slug: 'trusts-wills-estates' }, { name: 'Divorce & Family Law', slug: 'divorce-family-law' }, { name: 'Real Estate', slug: 'real-estate' }, { name: 'Civil Litigation', slug: 'civil-litigation' }]} />,

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
      <Header />
      {page}
      <Footer />
    </>
  );
}
