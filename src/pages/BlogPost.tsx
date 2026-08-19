import SEOHead from '../components/SEOHead';
import Container from '../components/Container';
import FAQAccordion from '../components/FAQAccordion';
import ConsultationCTA from '../components/ConsultationCTA';
import PageHero from '../components/PageHero';
import { insights } from '../data/insights';
import { JURISDICTION_NOTICE, SITE_URL } from '../lib/firm';
import { Link, usePathname } from '../lib/router';
import { articleSchema, breadcrumbSchema, faqSchema } from '../lib/schema';
import NotFound from './NotFound';

export default function BlogPost(): JSX.Element {
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';
  const post = insights.find((entry) => entry.slug === slug);
  if (!post) return <NotFound />;
  const canonical = `${SITE_URL}/insights/${post.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [articleSchema(post), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: post.title, path: `/insights/${post.slug}` }]), faqSchema(post.faqs)] };

  return (
    <main>
      <SEOHead title={post.seoTitle} description={post.metaDescription} canonical={canonical} schema={schema} />
      <PageHero visual="city" eyebrow={post.category} title={post.title} description={post.executiveSummary} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: post.title }]} aside={<p className="text-sm leading-7">Published {new Date(`${post.datePublished}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}<br />General information, not legal advice.</p>} />
      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(14rem,0.45fr)_minmax(0,1fr)] lg:gap-24 lg:py-28">
        <aside><p className="eyebrow">Key takeaways</p><ul className="mt-6 border-t border-ink/20">{post.keyTakeaways.map((item, index) => <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/20 py-4 text-sm leading-7 text-muted"><span data-key-takeaway-number className="font-display text-xl text-gold-readable">0{index + 1}</span>{item}</li>)}</ul></aside>
        <article className="prose-legal max-w-3xl">{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}</article>
      </Container>
      <section className="section-shell bg-ivory"><Container className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"><div><p className="eyebrow">Questions</p><h2 className="mt-5 font-display text-display-lg text-ink">Common considerations.</h2></div><FAQAccordion items={post.faqs} /></Container></section>
      <section className="border-y border-ink/15 bg-paper py-10"><Container><p className="max-w-none text-xs leading-6 text-muted">{JURISDICTION_NOTICE}</p><Link to={`/practice-areas/${post.relatedPractice}`} className="btn-text mt-5" ariaLabel="View related practice area">View related practice area</Link></Container></section>
      <ConsultationCTA />
    </main>
  );
}
