import ConsultationCTA from '../components/ConsultationCTA';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import PracticeAreaCard from '../components/PracticeAreaCard';
import SEOHead from '../components/SEOHead';
import type { Industry } from '../data/industries';
import { practiceAreaBySlug } from '../data/practiceAreas';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema, legalServiceSchema } from '../lib/schema';

export default function IndustryPage({ industry }: { industry: Industry }): JSX.Element {
  const canonicalPath = `/industries/${industry.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [legalServiceSchema(industry.links.map((link) => link.name)), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Who We Serve', path: '/#who-we-serve' }, { name: industry.title, path: canonicalPath }])] };

  return (
    <main>
      <SEOHead title={`${industry.title} Legal Counsel | Murray Legal`} description={industry.description} canonical={`${SITE_URL}${canonicalPath}`} schema={schema} />
      <PageHero visual="city" eyebrow="Who we serve" title={industry.title} description={industry.description} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Serve', href: '/#who-we-serve' }, { label: industry.title }]} aside={<p className="text-sm leading-7">Pennsylvania-licensed counsel. Representation in other jurisdictions is subject to applicable law and, when needed, local counsel.</p>} />
      <section className="section-shell bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="eyebrow">The perspective</p><h2 className="mt-5 font-display text-display-lg text-ink">Advice built around the whole decision.</h2></div>
          <div>
            <p className="text-xl leading-9 text-muted">{industry.perspective}</p>
            <ul className="mt-10 border-t border-ink/20">{industry.priorities.map((priority) => <li key={priority} className="flex items-start gap-4 border-b border-ink/20 py-5"><span className="mt-3 h-px w-6 shrink-0 bg-gold" aria-hidden="true" /><span className="font-semibold leading-7 text-ink">{priority}</span></li>)}</ul>
          </div>
        </Container>
      </section>
      <section className="counsel-section section-shell" aria-label="Relevant practice areas">
        <Container>
          <p className="eyebrow text-gold-light">Relevant capabilities</p><h2 className="mt-5 max-w-3xl font-display text-display-lg text-paper">Coordinated support for connected legal questions.</h2>
          <div className="counsel-grid mt-12 md:grid-cols-2">{industry.links.map((link) => { const area = practiceAreaBySlug[link.slug]; return <PracticeAreaCard key={link.slug} category={area.category} title={link.name} description={area.cardDescription} href={`/practice-areas/${link.slug}`} />; })}</div>
        </Container>
      </section>
      <ConsultationCTA />
    </main>
  );
}
