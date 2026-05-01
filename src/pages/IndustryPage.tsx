import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';

export default function IndustryPage({title,slug,links}:{title:string;slug:string;links:{name:string;slug:string}[]}){return <main className='bg-ivory px-4 py-16 md:px-6'><SEOHead title={`${title} | Murray Legal`} description={`${title} legal advisory services from Murray Legal.`} canonical={`${SITE_URL}/industries/${slug}`}/><section className='mx-auto max-w-5xl'><h1 className='font-display text-5xl text-navy'>{title}</h1><p className='mt-4 text-text-muted'>Strategic counsel for {title.toLowerCase()} across transactions, disputes, and risk management.</p><h2 className='mt-10 font-display text-3xl'>Relevant Practice Areas</h2><div className='mt-4 flex flex-wrap gap-3'>{links.map(l=><Link key={l.slug} to={`/practice-areas/${l.slug}`} className='btn-secondary' ariaLabel={l.name}>{l.name}</Link>)}</div></section></main>}
