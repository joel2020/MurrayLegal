import ConsultationCTA from '../components/ConsultationCTA';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { JURISDICTION_NOTICE, SITE_URL } from '../lib/firm';
import { organizationSchema } from '../lib/schema';

const principles = [
  ['Context before conclusions', 'The right answer depends on the client’s objectives, constraints, leverage, and tolerance for risk—not merely what a document says in isolation.'],
  ['Direct, measured communication', 'Clients deserve clear analysis, practical options, and a realistic account of what each path may require.'],
  ['Strategy that can be executed', 'Advice should work in the real world, with attention to timing, cost, counterparties, and the decisions still ahead.'],
];

export default function About(): JSX.Element {
  return <main>
    <SEOHead title="About Murray Legal | Strategic Counsel for Business & Private Clients" description="Learn how Murray Legal advises businesses, executives, investors, creators, athletes, families, and private clients on consequential legal decisions." canonical={`${SITE_URL}/about`} schema={organizationSchema()} />
    <PageHero eyebrow="The firm" title="About Murray Legal" description="A focused legal practice for clients navigating consequential business, property, dispute, creative, and private matters." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
    <section className="section-shell bg-paper"><Container className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><div><p className="eyebrow">The point of view</p><h2 className="mt-5 font-display text-display-lg text-ink">Good counsel makes the decision clearer.</h2></div><div><p className="text-xl leading-9 text-muted">Murray Legal advises businesses, investors, executives, creators, athletes, families, and high-net-worth individuals across corporate law, real estate, civil litigation, entertainment and sports transactions, intellectual property, estate planning, and family law.</p><p className="mt-6 text-lg leading-8 text-muted">The firm’s work begins with what is actually at stake. That means understanding the commercial or personal context, identifying the few issues that can materially change the outcome, and building a strategy that a client can use.</p></div></Container></section>
    <section className="section-shell bg-ivory"><Container><p className="eyebrow">Working principles</p><div className="mt-10 grid border-l border-t border-ink/15 lg:grid-cols-3">{principles.map(([title, body], index) => <article key={title} className="border-b border-r border-ink/15 p-7 sm:p-9"><span className="font-display text-2xl text-gold-dark">0{index + 1}</span><h2 className="mt-10 font-display text-3xl text-ink">{title}</h2><p className="mt-5 text-sm leading-7 text-muted">{body}</p></article>)}</div></Container></section>
    <section className="bg-ink py-16 text-paper sm:py-20"><Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><p className="eyebrow">Jurisdiction & reach</p><p className="max-w-4xl text-base leading-8 text-stone">{JURISDICTION_NOTICE}</p></Container></section>
    <ConsultationCTA />
  </main>;
}
