import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
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

export default function Home(): JSX.Element {
  const schema = { '@context': 'https://schema.org', '@graph': [organizationSchema(), websiteSchema(), legalServiceSchema(), faqSchema(homeFaqs)] };

  return (
    <main>
      <SEOHead title="Murray Legal | Premium Legal Counsel for Business, Real Estate & Litigation" description="Murray Legal advises businesses, investors, executives, creators, athletes, families, and high-net-worth clients on corporate, real estate, litigation, IP, estate, and family law matters." canonical={`${SITE_URL}/`} schema={schema} />

      <section className="bg-navy-deep px-4 py-24 text-ivory md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-display-xl">Premium Legal Counsel for Business, Real Estate, Litigation, and Private Client Matters</h1>
          <p className="mt-6 max-w-4xl text-lg">Murray Legal advises businesses, investors, executives, creators, athletes, families, and high-net-worth individuals on complex legal matters across transactions, disputes, intellectual property, estate planning, and family law.</p>
          <p className="mt-4 text-stone">Serving clients across the United States where permitted by law and in coordination with local counsel when required.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Link to="/contact" className="btn-primary" ariaLabel="Schedule a Consultation">Schedule a Consultation</Link><Link to="#practice-areas" className="btn-outline" ariaLabel="Explore Practice Areas">Explore Practice Areas</Link></div>
        </div>
      </section>

      <section id="practice-areas" className="bg-ivory px-4 py-16 md:px-6"><div className="mx-auto max-w-6xl"><h2 className="font-display text-display-md text-navy">Practice Areas</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{practiceAreas.map((practice)=><article key={practice.slug} className="card-premium bg-white"><h3 className="text-2xl text-navy">{practice.name}</h3><p className="mt-2 text-text-muted">{practice.cardDescription}</p><Link to={`/practice-areas/${practice.slug}`} className="mt-4 inline-block font-semibold text-navy" ariaLabel={`View ${practice.name}`}>View Practice Area</Link></article>)}</div></div></section>

      <section className="bg-white px-4 py-16 md:px-6"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"><div><h2 className="font-display text-display-md text-navy">Who We Serve</h2><p className="mt-4 text-text-muted">We advise operating companies, founder-led businesses, real estate operators, athletes, creators, executives, and private clients managing sensitive legal exposure.</p></div><div className="rounded border border-[rgba(15,31,61,0.1)] bg-ivory p-6"><h3 className="text-xl font-semibold text-navy">Why Clients Choose Murray Legal</h3><ul className="mt-4 space-y-2 text-text-muted"><li>• Strategic counsel calibrated for high-stakes decisions.</li><li>• Transactional, litigation, and advisory support in one platform.</li><li>• Discreet representation for reputationally sensitive matters.</li><li>• National-facing service model with jurisdiction-safe coordination.</li></ul></div></div></section>

      <section className="bg-stone px-4 py-16 md:px-6"><div className="mx-auto max-w-6xl"><h2 className="font-display text-display-md text-navy">High-Stakes Legal Counsel</h2><p className="mt-4 max-w-4xl text-text-muted">When timelines compress, counterparties shift, or disputes escalate, legal decisions should not be reactive. Murray Legal helps clients preserve leverage before commitments harden into exposure.</p></div></section>

      <section className="bg-ivory px-4 py-16 md:px-6"><div className="mx-auto max-w-6xl"><h2 className="font-display text-display-md text-navy">Insights / Legal Briefings</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{insights.slice(0,3).map((post)=><article key={post.slug} className="card-premium bg-white"><p className="text-xs uppercase tracking-[0.08em] text-text-muted">{post.category}</p><h3 className="mt-2 text-xl text-navy">{post.title}</h3><Link to={`/insights/${post.slug}`} className="mt-4 inline-block font-semibold text-navy" ariaLabel={`Read ${post.title}`}>Read Briefing</Link></article>)}</div><Link to="/insights" className="btn-secondary mt-6 inline-block" ariaLabel="View all insights">View All Insights</Link></div></section>

      <section className="bg-white px-4 py-16 md:px-6"><div className="mx-auto max-w-5xl"><h2 className="font-display text-display-md text-navy">Frequently Asked Questions</h2>{homeFaqs.map((faq)=><article key={faq.question} className="mt-6 border-b pb-4"><h3 className="text-lg font-semibold text-navy">{faq.question}</h3><p className="mt-2 text-text-muted">{faq.answer}</p></article>)}</div></section>

      <ConsultationCTA />
    </main>
  );
}
