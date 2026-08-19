import { ArrowRight, ArrowUpRight } from 'lucide-react';
import CityHero from '../components/CityHero';
import ConsultationCTA from '../components/ConsultationCTA';
import Container from '../components/Container';
import FAQAccordion from '../components/FAQAccordion';
import PracticeAreaCard from '../components/PracticeAreaCard';
import SectionHeading from '../components/SectionHeading';
import SEOHead from '../components/SEOHead';
import { industryNavigation } from '../data/navigation';
import { insights } from '../data/insights';
import { practiceAreas } from '../data/practiceAreas';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';
import { faqSchema, legalServiceSchema, organizationSchema, websiteSchema } from '../lib/schema';

const homeFaqs = [
  { question: 'What does Murray Legal do?', answer: 'Murray Legal advises corporate and private clients on transactions, disputes, intellectual property, estate planning, and family law matters.' },
  { question: 'Who does Murray Legal represent?', answer: 'The firm represents businesses, founders, executives, investors, creators, athletes, families, and high-net-worth individuals.' },
  { question: 'Where does the firm serve clients?', answer: 'Murray Legal serves clients across the United States where permitted by law and in coordination with local counsel when required.' },
];

const credibility = [
  { label: 'Strategic perspective', body: 'Counsel calibrated to the decision—not merely the document.' },
  { label: 'Discreet representation', body: 'Clear, measured guidance for sensitive business and private matters.' },
  { label: 'Cross-disciplinary support', body: 'Transactional, litigation, and advisory thinking in one firm.' },
];

export default function Home(): JSX.Element {
  const schema = { '@context': 'https://schema.org', '@graph': [organizationSchema(), websiteSchema(), legalServiceSchema(), faqSchema(homeFaqs)] };

  return (
    <main>
      <SEOHead title="Murray Legal | Premium Legal Counsel for Business, Real Estate & Litigation" description="Murray Legal advises businesses, investors, executives, creators, athletes, families, and high-net-worth clients on corporate, real estate, litigation, IP, estate, and family law matters." canonical={`${SITE_URL}/`} schema={schema} />

      <CityHero />

      <section className="section-shell bg-paper">
        <Container>
          <SectionHeading
            eyebrow="The firm"
            title="Counsel for business, property, disputes, and private matters."
            description="From a Yonkers office, Murray Legal advises corporate and private clients across transactions, real estate, civil disputes, creative rights, estate planning, and family matters where representation is permitted by law."
          />
          <div className="mt-12 grid border-y border-ink/15 md:grid-cols-3">
            {credibility.map((item, index) => (
              <div key={item.label} className={`py-7 md:px-8 ${index > 0 ? 'border-t border-ink/15 md:border-l md:border-t-0' : ''} ${index === 0 ? 'md:pl-0' : ''}`}>
                <p className="text-xs font-bold uppercase tracking-[0.13em] text-gold-dark">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="practice-areas" className="counsel-section section-shell" aria-label="Practice areas">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="Counsel across the matters that shape what comes next." description="Murray Legal combines business-minded advice with disciplined risk analysis across transactions, disputes, property, creative rights, and private-client concerns." />
          <div className="counsel-grid mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((practice) => (
              <PracticeAreaCard key={practice.slug} category={practice.category} title={practice.name} description={practice.cardDescription} href={`/practice-areas/${practice.slug}`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid gap-0 py-0 lg:grid-cols-2">
          <div className="bg-navy px-7 py-16 text-paper sm:px-12 sm:py-20 lg:-ml-12 lg:px-16 lg:py-24">
            <p className="eyebrow">The Murray Legal approach</p>
            <h2 className="mt-5 max-w-xl font-display text-display-lg text-paper">Preserve leverage before a decision becomes exposure.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone sm:text-lg">The most useful legal advice arrives early enough to change the outcome. Murray Legal helps clients understand obligations, pressure-test choices, and move with a deliberate strategy.</p>
            <Link to="/about" ariaLabel="Learn about Murray Legal" className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-gold text-sm font-bold text-paper hover:text-gold-light">How the firm works <ArrowUpRight aria-hidden="true" size={17} /></Link>
          </div>
          <div className="px-7 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <p className="eyebrow">Engagement principles</p>
            <ol className="mt-7 divide-y divide-ink/15">
              {[
                ['01', 'Define what is truly at stake'],
                ['02', 'Separate immediate pressure from durable risk'],
                ['03', 'Build a practical path through the decision'],
                ['04', 'Coordinate execution with clarity and discretion'],
              ].map(([number, label]) => (
                <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 py-5 first:pt-0">
                  <span className="font-display text-2xl text-gold-dark">{number}</span>
                  <span className="font-semibold leading-7 text-ink">{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section id="who-we-serve" className="section-shell bg-stone/70" aria-label="Client groups">
        <Container>
          <SectionHeading eyebrow="Who we serve" title="Advice shaped around the client, the context, and the consequence." description="Legal risk does not look the same from every seat. Explore counsel organized around the people and organizations Murray Legal serves." />
          <div className="mt-12 grid border-t border-ink/20 md:grid-cols-2 lg:grid-cols-5">
            {industryNavigation.map((item) => (
              <Link key={item.href} to={item.href} ariaLabel={item.label} className="group flex min-h-40 items-end justify-between gap-4 border-b border-ink/20 p-5 transition hover:bg-paper md:border-r lg:min-h-52">
                <span className="flex items-end justify-between gap-4 font-display text-2xl font-semibold leading-tight text-ink">
                  {item.label}<ArrowUpRight aria-hidden="true" size={19} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-paper" aria-label="Latest insights">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Legal briefings" title="Perspective for decisions already in motion." />
            <Link to="/insights" className="btn-text" ariaLabel="View all insights">View all insights <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <div className="mt-12 grid gap-px bg-ink/15 border border-ink/15 lg:grid-cols-3">
            {insights.slice(0, 3).map((post) => (
              <article key={post.slug} className="flex min-h-80 flex-col bg-ivory p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.13em] text-gold-dark">{post.category}</p>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink">{post.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{post.description}</p>
                <Link to={`/insights/${post.slug}`} className="btn-text mt-auto self-start pt-7" ariaLabel={`Read ${post.title}`}>Read briefing <ArrowRight aria-hidden="true" size={16} /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-ivory">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionHeading eyebrow="Common questions" title="A clear starting point." description="General answers about fit, clients, and service reach. A consultation is required for advice about a specific matter." />
          <FAQAccordion items={homeFaqs} />
        </Container>
      </section>

      <ConsultationCTA />
    </main>
  );
}
