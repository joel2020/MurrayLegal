import SEOHead from '../components/SEOHead';
import ConsultationCTA from '../components/ConsultationCTA';
import Container from '../components/Container';
import FAQAccordion from '../components/FAQAccordion';
import PageHero from '../components/PageHero';
import { practiceAreaBySlug } from '../data/practiceAreas';
import { JURISDICTION_NOTICE, SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';
import { ArrowRight } from 'lucide-react';
import { breadcrumbSchema, faqSchema, legalServiceSchema } from '../lib/schema';

export default function PracticeAreaPage({ slug, canonicalPath }: { slug: string; canonicalPath: string }): JSX.Element {
  const area = practiceAreaBySlug[slug];
  const faqs = area.faqs.length
    ? area.faqs
    : [{ question: 'Where does Murray Legal serve clients?', answer: 'Murray Legal serves clients across the United States where permitted by law and in coordination with local counsel when required.' }];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      legalServiceSchema([area.name]),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Practice Areas', path: '/#practice-areas' },
        { name: area.name, path: canonicalPath },
      ]),
      faqSchema(faqs),
    ],
  };

  return (
    <main>
      <SEOHead title={area.titleTag} description={area.metaDescription} canonical={`${SITE_URL}${canonicalPath}`} schema={schema} />
      <PageHero eyebrow="Practice area" title={area.heroHeadline} description={area.heroDescription} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Practice Areas', href: '/#practice-areas' }, { label: area.name }]} aside={<><p className="text-xs font-bold uppercase tracking-[0.13em] text-gold-light">Who we advise</p><p className="mt-3 text-sm leading-7">{area.whoThisHelps.join(' · ')}</p></>} />

      <section className="section-shell bg-paper">
        <Container className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div><p className="eyebrow">The stakes</p><h2 className="mt-5 font-display text-display-lg text-ink">Clarity before commitments compound.</h2><p className="mt-6 text-lg leading-8 text-muted">{area.riskFraming}</p></div>
          <div>
            <p className="eyebrow">Matters handled</p>
            <ul className="mt-6 grid border-l border-t border-ink/15 sm:grid-cols-2">{area.mattersHandled.map((matter, index) => <li key={matter} className="flex min-h-24 items-start gap-4 border-b border-r border-ink/15 p-5"><span className="font-display text-xl text-gold-dark">{String(index + 1).padStart(2, '0')}</span><span className="font-semibold leading-7 text-ink">{matter}</span></li>)}</ul>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-ivory">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="eyebrow">How an engagement works</p><h2 className="mt-5 font-display text-display-lg text-ink">A disciplined path from context to action.</h2></div>
          <ol className="border-t border-ink/20">{area.process.map((step, index) => <li key={step} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-ink/20 py-6"><span className="font-display text-2xl text-gold-dark">0{index + 1}</span><div><h3 className="text-lg text-ink">{step}</h3><p className="mt-2 text-sm leading-7 text-muted">Scope, priorities, and next actions are tailored to the matter and confirmed before work proceeds.</p></div></li>)}</ol>
        </Container>
      </section>

      {area.relatedPracticeSlugs.length > 0 && <section className="bg-stone/70 py-16 sm:py-20" aria-label="Related practice areas"><Container><p className="eyebrow">Connected capabilities</p><div className="mt-7 flex flex-wrap gap-3">{area.relatedPracticeSlugs.map((slug) => { const related = practiceAreaBySlug[slug]; return <Link key={slug} to={`/practice-areas/${slug}`} ariaLabel={`Explore ${related.name}`} className="btn-secondary">{related.name}<ArrowRight size={16} aria-hidden="true" /></Link>; })}</div></Container></section>}

      <section className="section-shell bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow">Frequently asked</p><h2 className="mt-5 font-display text-display-lg text-ink">A practical starting point.</h2><p className="mt-6 text-sm leading-7 text-muted">Answers are general information. A consultation is required for advice about a particular matter.</p></div><FAQAccordion items={faqs} /></Container>
      </section>

      <section className="border-y border-ink/15 bg-ivory py-8"><Container><p className="max-w-none text-xs leading-6 text-muted">{JURISDICTION_NOTICE}</p></Container></section>
      <ConsultationCTA />
    </main>
  );
}
