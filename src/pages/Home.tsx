import { ArrowRight, ArrowUpRight } from 'lucide-react';
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

      <section className="bg-paper pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-32">
        <Container>
          <picture className="block overflow-hidden bg-ink">
            <source srcSet="/images/murray-legal-architecture.webp" type="image/webp" />
            <img
              src="/images/murray-legal-architecture.png"
              width="1536"
              height="1024"
              alt="Contemporary limestone and bronze architecture in directional light"
              className="h-[19rem] w-full object-cover object-[62%_58%] sm:h-[27rem] lg:h-[34rem]"
              fetchPriority="high"
            />
          </picture>

          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Business. Property. Disputes. Private matters.</p>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted">Pennsylvania-licensed counsel serving clients across the United States where permitted by law.</p>
            </div>
            <div>
              <h1 className="max-w-5xl font-display text-display-xl text-ink">Strategic Legal Counsel for Consequential Decisions</h1>
              <div className="mt-8 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">Murray Legal advises businesses, investors, executives, creators, athletes, families, and high-net-worth individuals across transactions, disputes, intellectual property, estate planning, and family law.</p>
                <div className="flex flex-col items-start gap-3 sm:flex-row md:flex-col md:items-stretch">
                  <Link to="/contact" className="btn-primary justify-between" ariaLabel="Schedule a Consultation">Schedule a Consultation <ArrowUpRight aria-hidden="true" size={17} /></Link>
                  <Link to="#practice-areas" className="btn-secondary justify-between" ariaLabel="Explore Practice Areas">Explore Practice Areas <ArrowRight aria-hidden="true" size={17} /></Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-9 text-paper" aria-label="Firm strengths">
        <Container className="grid gap-7 md:grid-cols-3 md:gap-0">
          {credibility.map((item, index) => (
            <div key={item.label} className={`md:px-8 ${index > 0 ? 'border-t border-paper/15 pt-7 md:border-l md:border-t-0 md:pt-0' : ''} ${index === 0 ? 'md:pl-0' : ''}`}>
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-gold-light">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-stone">{item.body}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id="practice-areas" className="section-shell bg-ivory" aria-label="Practice areas">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="Counsel across the matters that shape what comes next." description="Murray Legal combines business-minded advice with disciplined risk analysis across transactions, disputes, property, creative rights, and private-client concerns." />
          <div className="mt-12 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((practice, index) => (
              <PracticeAreaCard key={practice.slug} number={String(index + 1).padStart(2, '0')} title={practice.name} description={practice.cardDescription} href={`/practice-areas/${practice.slug}`} />
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

      <section id="who-we-serve" className="section-shell bg-stone/70">
        <Container>
          <SectionHeading eyebrow="Who we serve" title="Advice shaped around the client, the context, and the consequence." description="Legal risk does not look the same from every seat. Explore counsel organized around the people and organizations Murray Legal serves." />
          <div className="mt-12 grid border-t border-ink/20 md:grid-cols-2 lg:grid-cols-5">
            {industryNavigation.map((item, index) => (
              <Link key={item.href} to={item.href} ariaLabel={item.label} className="group flex min-h-40 flex-col justify-between border-b border-ink/20 p-5 transition hover:bg-paper md:border-r lg:min-h-52">
                <span className="text-xs font-semibold text-gold-dark">0{index + 1}</span>
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
