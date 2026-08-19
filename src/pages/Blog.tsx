import { ArrowRight } from 'lucide-react';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { insights } from '../data/insights';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';

export default function Blog(): JSX.Element {
  return <main>
    <SEOHead title="Legal Insights for Business, Real Estate, Litigation & Private Clients | Murray Legal" description="Read legal insights from Murray Legal on corporate law, real estate, litigation, entertainment, sports, IP, estate planning, and family law." canonical={`${SITE_URL}/insights`} />
    <PageHero visual="city" eyebrow="Legal briefings" title="Legal Insights" description="Practical perspective for leaders, investors, creators, families, and private clients facing decisions already in motion." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]} />
    <section className="section-shell bg-ivory" aria-label="Insight library"><Container><div className="grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3">{insights.map((post) => <article key={post.slug} className="flex min-h-96 flex-col border-b border-r border-ink/15 bg-paper p-7 sm:p-9"><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-gold-dark"><span className="h-px w-8 bg-gold" aria-hidden="true" /><span>{post.category}</span></div><h2 className="mt-8 font-display text-3xl font-semibold leading-tight text-ink">{post.title}</h2><p className="mt-5 text-sm leading-7 text-muted">{post.description}</p><Link to={`/insights/${post.slug}`} className="btn-text mt-auto self-start pt-8" ariaLabel={`Read ${post.title}`}>Read briefing <ArrowRight size={16} aria-hidden="true" /></Link></article>)}</div></Container></section>
  </main>;
}
