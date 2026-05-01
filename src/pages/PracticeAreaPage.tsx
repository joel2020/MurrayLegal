import SEOHead from '../components/SEOHead';
import { practiceAreaBySlug } from '../data/practiceAreas';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';
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
    <main className="bg-ivory px-4 py-16 md:px-6">
      <SEOHead title={area.titleTag} description={area.metaDescription} canonical={`${SITE_URL}${canonicalPath}`} schema={schema} />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">{area.heroHeadline}</h1>
        <p className="mt-4 text-text-muted">{area.heroDescription}</p>

        <h2 className="mt-10 font-display text-3xl text-navy">Matters Handled</h2>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {area.mattersHandled.map((matter) => <li key={matter}>• {matter}</li>)}
        </ul>

        <h2 className="mt-10 font-display text-3xl text-navy">Who This Helps</h2>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {area.whoThisHelps.map((item) => <li key={item}>• {item}</li>)}
        </ul>

        <h2 className="mt-10 font-display text-3xl text-navy">Risk Framing</h2>
        <p className="mt-3 text-text-muted">{area.riskFraming}</p>

        <h2 className="mt-10 font-display text-3xl text-navy">Consultation Process</h2>
        <ol className="mt-3 list-decimal pl-6">
          {area.process.map((step) => <li key={step}>{step}</li>)}
        </ol>

        <h2 className="mt-10 font-display text-3xl text-navy">Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="mt-4">
            <h3 className="font-semibold text-navy">{faq.question}</h3>
            <p className="text-text-muted">{faq.answer}</p>
          </div>
        ))}

        <div className="mt-10 rounded border border-[rgba(15,31,61,0.1)] bg-white p-6">
          <p className="text-sm text-text-muted">
            This website provides general information only and does not constitute legal advice. Contacting Murray
            Legal does not create an attorney-client relationship.
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Murray Legal serves clients across the United States where permitted by law and in coordination with local
            counsel when required.
          </p>
          <Link to="/contact" ariaLabel={area.cta} className="btn-primary mt-4 inline-block">{area.cta}</Link>
        </div>
      </section>
    </main>
  );
}
