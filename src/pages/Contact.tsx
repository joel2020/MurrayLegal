import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../components/Container';
import IntakeForm from '../components/IntakeForm';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, PRIMARY_ADDRESS_LINE_1, PRIMARY_CITY_STATE_ZIP, SECONDARY_ADDRESS_LINE_1, SECONDARY_CITY_STATE_ZIP, SITE_URL } from '../lib/firm';
import { breadcrumbSchema, contactPageSchema, organizationSchema } from '../lib/schema';

export default function Contact(): JSX.Element {
  const schema = { '@context': 'https://schema.org', '@graph': [contactPageSchema(), organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])] };

  return <main>
    <SEOHead title="Contact Murray Legal | Schedule a Legal Consultation" description="Contact Murray Legal to discuss a business, real estate, litigation, entertainment, sports, IP, estate planning, or family law matter." canonical={`${SITE_URL}/contact`} schema={schema} />
    <PageHero eyebrow="Start a conversation" title="Schedule a Consultation" description="Share the essential, non-confidential context. Murray Legal will evaluate fit, urgency, conflicts, and jurisdiction before any engagement begins." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} aside={<p className="text-sm leading-7">Submitting an inquiry does not create an attorney-client relationship. Please do not send confidential or time-sensitive information.</p>} visual="solid" />
    <section className="section-shell bg-ivory"><Container className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start"><IntakeForm /><aside className="border-t-[6px] border-gold bg-navy-deep p-7 text-paper sm:p-9 lg:sticky lg:top-36"><p className="eyebrow">What happens next</p><ol className="mt-6 border-t border-paper/20">{['The firm reviews fit and jurisdiction.', 'A conflict check may be required.', 'The firm contacts you about next steps.', 'Representation begins only through a written engagement.'].map((item, index) => <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-paper/20 py-5 text-sm leading-7 text-stone"><span className="font-display text-xl text-gold-light">0{index + 1}</span>{item}</li>)}</ol><div className="mt-9 space-y-5 text-sm leading-7 text-stone"><a className="flex min-h-11 items-start gap-3 py-2 hover:text-gold-light" href={`tel:${PHONE_TEL}`} aria-label={`Call Murray Legal at ${PHONE_DISPLAY}`}><Phone size={17} className="mt-1 shrink-0 text-gold" aria-hidden="true" />{PHONE_DISPLAY}</a><a className="flex min-h-11 items-start gap-3 break-all py-2 hover:text-gold-light" href={`mailto:${EMAIL}`}><Mail size={17} className="mt-1 shrink-0 text-gold" aria-hidden="true" />{EMAIL}</a><div className="flex items-start gap-3"><MapPin size={17} className="mt-1 shrink-0 text-gold" aria-hidden="true" /><p>{PRIMARY_ADDRESS_LINE_1}<br />{PRIMARY_CITY_STATE_ZIP}<br /><br />{SECONDARY_ADDRESS_LINE_1}<br />{SECONDARY_CITY_STATE_ZIP}</p></div></div></aside></Container></section>
  </main>;
}
