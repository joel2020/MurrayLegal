import { ArrowRight } from 'lucide-react';
import ConsultationCTA from '../components/ConsultationCTA';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import type { Industry } from '../data/industries';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';
import { breadcrumbSchema, legalServiceSchema } from '../lib/schema';

export default function IndustryPage({ industry }: { industry: Industry }): JSX.Element {
  const canonicalPath = `/industries/${industry.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [legalServiceSchema(industry.links.map((link) => link.name)), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Who We Serve', path: '/#who-we-serve' }, { name: industry.title, path: canonicalPath }])] };

  return (
    <main>
      <SEOHead title={`${industry.title} Legal Counsel | Murray Legal`} description={industry.description} canonical={`${SITE_URL}${canonicalPath}`} schema={schema} />
      <PageHero eyebrow="Who we serve" title={industry.title} description={industry.description} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Serve', href: '/#who-we-serve' }, { label: industry.title }]} aside={<p className="text-sm leading-7">Pennsylvania-licensed counsel. Representation in other jurisdictions is subject to applicable law and, when needed, local counsel.</p>} />
      <section className="section-shell bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="eyebrow">The perspective</p><h2 className="mt-5 font-display text-display-lg text-ink">Advice built around the whole decision.</h2></div>
          <div>
            <p className="text-xl leading-9 text-muted">{industry.perspective}</p>
            <ol className="mt-10 border-t border-ink/20">{industry.priorities.map((priority, index) => <li key={priority} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/20 py-5"><span className="font-display text-2xl text-gold-dark">0{index + 1}</span><span className="font-semibold leading-7 text-ink">{priority}</span></li>)}</ol>
          </div>
        </Container>
      </section>
      <section className="section-shell bg-ivory" aria-label="Relevant practice areas">
        <Container>
          <p className="eyebrow">Relevant capabilities</p><h2 className="mt-5 max-w-3xl font-display text-display-lg text-ink">Coordinated support for connected legal questions.</h2>
          <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2">{industry.links.map((link) => <Link key={link.slug} to={`/practice-areas/${link.slug}`} ariaLabel={`Explore ${link.name}`} className="group flex min-h-36 items-end justify-between gap-6 border-b border-r border-ink/15 bg-paper p-7 font-display text-3xl font-semibold text-ink transition hover:bg-ink hover:text-paper sm:p-9">{link.name}<ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" size={20} aria-hidden="true" /></Link>)}</div>
        </Container>
      </section>
      <ConsultationCTA />
    </main>
  );
}
