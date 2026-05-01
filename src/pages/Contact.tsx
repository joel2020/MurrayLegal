import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema, contactPageSchema, organizationSchema } from '../lib/schema';

export default function Contact(): JSX.Element {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [contactPageSchema(), organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])],
  };

  return (
    <main className="bg-ivory px-4 py-16 md:px-6">
      <SEOHead title="Contact Murray Legal | Schedule a Legal Consultation" description="Contact Murray Legal to discuss a business, real estate, litigation, entertainment, sports, IP, estate planning, or family law matter." canonical={`${SITE_URL}/contact`} schema={schema} />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Schedule a Consultation</h1>
        <p className="mt-4 max-w-4xl text-text-muted">Use this form to request a consultation with Murray Legal. The firm will review your inquiry and determine whether it is able to assist.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="rounded border border-[rgba(15,31,61,0.1)] bg-white p-6 md:p-8">
            <h2 className="font-display text-3xl text-navy">Legal Intake</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm">Name<input className="mt-1 w-full rounded border p-3" name="name" /></label>
              <label className="text-sm">Email<input className="mt-1 w-full rounded border p-3" type="email" name="email" /></label>
              <label className="text-sm">Phone<input className="mt-1 w-full rounded border p-3" name="phone" /></label>
              <label className="text-sm">Company<input className="mt-1 w-full rounded border p-3" name="company" /></label>
              <label className="text-sm">Practice Area<input className="mt-1 w-full rounded border p-3" name="practiceArea" /></label>
              <label className="text-sm">State / Jurisdiction<input className="mt-1 w-full rounded border p-3" name="jurisdiction" /></label>
              <label className="text-sm">Urgency<input className="mt-1 w-full rounded border p-3" name="urgency" /></label>
              <label className="text-sm">Preferred contact method<input className="mt-1 w-full rounded border p-3" name="contactMethod" /></label>
              <label className="text-sm md:col-span-2">Brief description of matter<textarea className="mt-1 w-full rounded border p-3" rows={5} name="matterDescription" /></label>
              <label className="text-sm md:col-span-2"><input type="checkbox" className="mr-2" />I understand submitting an inquiry does not create an attorney-client relationship.</label>
            </div>
            <p className="mt-4 text-sm text-text-muted">Please do not submit confidential or time-sensitive information through this form. Submitting an inquiry does not create an attorney-client relationship.</p>
            <button className="btn-primary mt-6" type="button">Contact Murray Legal</button>
          </form>

          <aside className="rounded border border-[rgba(184,151,42,0.25)] bg-navy-deep p-6 text-ivory md:p-8">
            <h2 className="font-display text-3xl">Consultation Standards</h2>
            <p className="mt-4 text-stone">Murray Legal evaluates fit, urgency, and jurisdiction before engagement. Representation begins only after conflict review and signed engagement terms.</p>
            <p className="mt-4 text-stone">Murray Legal serves clients across the United States where permitted by law and in coordination with local counsel when required.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
