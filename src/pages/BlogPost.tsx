import SEOHead from '../components/SEOHead';
import { insights } from '../data/insights';
import { SITE_URL } from '../lib/firm';
import { Link, usePathname } from '../lib/router';
import { articleSchema, breadcrumbSchema, faqSchema } from '../lib/schema';

export default function BlogPost(): JSX.Element {
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';
  const post = insights.find((entry) => entry.slug === slug) || insights[0];
  const canonical = `${SITE_URL}/insights/${post.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [articleSchema(post), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: post.title, path: `/insights/${post.slug}` }]), faqSchema(post.faqs)] };

  return (
    <main className="bg-ivory px-4 py-16 md:px-6">
      <SEOHead title={post.seoTitle} description={post.metaDescription} canonical={canonical} schema={schema} />
      <article className="mx-auto max-w-4xl">
        <h1 className="font-display text-5xl text-navy">{post.title}</h1>
        <p className="mt-4 text-text-muted">{post.executiveSummary}</p>
        <h2 className="mt-8 font-display text-3xl text-navy">Key Takeaways</h2>
        <ul className="mt-3 space-y-2">{post.keyTakeaways.map((item) => <li key={item}>• {item}</li>)}</ul>
        {post.sections.map((section) => <section key={section.heading} className="mt-8"><h2 className="font-display text-3xl text-navy">{section.heading}</h2>{section.paragraphs.map((paragraph, index) => <p className="mt-3 text-text-muted" key={index}>{paragraph}</p>)}</section>)}
        <h2 className="mt-8 font-display text-3xl text-navy">Frequently Asked Questions</h2>
        {post.faqs.map((faq) => <div key={faq.question} className="mt-4"><h3 className="font-semibold text-navy">{faq.question}</h3><p className="text-text-muted">{faq.answer}</p></div>)}
        <p className="mt-8 text-sm text-text-muted">This website provides general information only and does not constitute legal advice. Contacting Murray Legal does not create an attorney-client relationship.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/practice-areas/${post.relatedPractice}`} className="btn-secondary" ariaLabel="View related practice area">View Related Practice Area</Link>
          <Link to="/contact" className="btn-primary" ariaLabel="Discuss Your Matter">Discuss Your Matter</Link>
        </div>
      </article>
    </main>
  );
}
