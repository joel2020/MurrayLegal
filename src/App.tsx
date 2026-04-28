import { type JSX } from 'react';
import {
  CTASection,
  ContactSection,
  FAQSection,
  HeroSection,
  HomeSections,
  PracticeAreaSections,
  SiteFooter,
  SiteHeader,
} from './components/sections';

function App(): JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className="bg-stone-50">
        <HeroSection />
        <HomeSections />
        <PracticeAreaSections />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
