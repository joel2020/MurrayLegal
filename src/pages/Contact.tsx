import { useState, type FormEvent } from 'react';
import SEOHead from '../components/SEOHead';
import { EMAIL, SITE_URL } from '../lib/firm';
import { breadcrumbSchema, contactPageSchema, organizationSchema } from '../lib/schema';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact(): JSX.Element {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [contactPageSchema(), organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])],
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState('submitting');
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          practiceArea: formData.get('practiceArea'),
          jurisdiction: formData.get('jurisdiction'),
          urgency: formData.get('urgency'),
          contactMethod: formData.get('contactMethod'),
          matterDescription: formData.get('matterDescription'),
          website: formData.get('website'),
          submittedAt: new Date().toISOString(),
          pageUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error('Intake request failed.');
      }

      form.reset();
      setSubmissionState('success');
      setSubmissionMessage('Thank you. Your consultation request has been sent to Murray Legal.');
    } catch {
      setSubmissionState('error');
      setSubmissionMessage(`We could not send your request. Please email ${EMAIL} or call the firm directly.`);
    }
  };

  return (
    <main className="bg-ivory px-4 py-16 md:px-6">
      <SEOHead title="Contact Murray Legal | Schedule a Legal Consultation" description="Contact Murray Legal to discuss a business, real estate, litigation, entertainment, sports, IP, estate planning, or family law matter." canonical={`${SITE_URL}/contact`} schema={schema} />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Schedule a Consultation</h1>
        <p className="mt-4 max-w-4xl text-text-muted">Use this form to request a consultation with Murray Legal. The firm will review your inquiry and determine whether it is able to assist.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="rounded border border-[rgba(15,31,61,0.1)] bg-white p-6 md:p-8" onSubmit={handleSubmit}>
            <h2 className="font-display text-3xl text-navy">Legal Intake</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm">Name<input autoComplete="name" className="mt-1 w-full rounded border p-3" name="name" required /></label>
              <label className="text-sm">Email<input autoComplete="email" className="mt-1 w-full rounded border p-3" type="email" name="email" required /></label>
              <label className="text-sm">Phone<input autoComplete="tel" className="mt-1 w-full rounded border p-3" type="tel" name="phone" required /></label>
              <label className="text-sm">Company<input autoComplete="organization" className="mt-1 w-full rounded border p-3" name="company" /></label>
              <label className="text-sm">Practice Area<input className="mt-1 w-full rounded border p-3" name="practiceArea" required /></label>
              <label className="text-sm">State / Jurisdiction<input autoComplete="address-level1" className="mt-1 w-full rounded border p-3" name="jurisdiction" required /></label>
              <label className="text-sm">Urgency<input className="mt-1 w-full rounded border p-3" name="urgency" /></label>
              <label className="text-sm">Preferred contact method<input className="mt-1 w-full rounded border p-3" name="contactMethod" /></label>
              <label className="text-sm md:col-span-2">Brief description of matter<textarea className="mt-1 w-full rounded border p-3" rows={5} name="matterDescription" required /></label>
              <label className="hidden" aria-hidden="true">Website<input autoComplete="off" name="website" tabIndex={-1} /></label>
              <label className="text-sm md:col-span-2"><input type="checkbox" className="mr-2" name="consent" required />I understand submitting an inquiry does not create an attorney-client relationship.</label>
            </div>
            <p className="mt-4 text-sm text-text-muted">Please do not submit confidential or time-sensitive information through this form. Submitting an inquiry does not create an attorney-client relationship.</p>
            <button className="btn-primary mt-6" type="submit" disabled={submissionState === 'submitting'}>
              {submissionState === 'submitting' ? 'Sending…' : 'Contact Murray Legal'}
            </button>
            {submissionMessage && (
              <p className={`mt-4 text-sm ${submissionState === 'error' ? 'text-red-700' : 'text-green-800'}`} role={submissionState === 'error' ? 'alert' : 'status'}>
                {submissionMessage}
              </p>
            )}
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
