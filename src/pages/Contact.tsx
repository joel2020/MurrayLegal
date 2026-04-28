import { FormEvent, useState } from 'react';
import SEOHead from '../components/SEOHead';
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRIMARY_ADDRESS_LINE_1,
  PRIMARY_CITY_STATE_ZIP,
  SECONDARY_ADDRESS_LINE_1,
  SECONDARY_CITY_STATE_ZIP,
  SITE_URL,
} from '../lib/firm';
import { localLegalServiceSchema } from '../lib/schema';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setErrorMessage('');

    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage(
        `Online form submission is not configured yet. Please call ${PHONE_DISPLAY} or email ${EMAIL}.`
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('website')) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSuccess(true);
      form.reset();
    } catch {
      setErrorMessage(`Unable to submit your message right now. Please call us at ${PHONE_DISPLAY}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Contact Murray Legal | Schedule a Consultation"
        description="Contact Murray Legal to request a consultation for real estate, business law, corporate governance, and civil litigation matters in New York."
        canonical={`${SITE_URL}/contact`}
        schema={localLegalServiceSchema('Real Estate Law, Business Law, Civil Litigation')}
      />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Schedule a Consultation</h1>
        <p className="mt-4 max-w-3xl text-text-muted">
          Use the form below to describe your legal matter and request a consultation. All inquiries are confidential.
          Submitting this form does not create an attorney-client relationship.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="rounded-md bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl text-navy">Contact Form</h2>
            {isSuccess && (
              <p className="mt-5 rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Thank you for contacting Murray Legal. Your message has been sent successfully.
              </p>
            )}
            {errorMessage && (
              <p className="mt-5 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </p>
            )}
            <form method="POST" onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <label className="block text-sm font-medium text-text-dark">
                Name
                <input
                  aria-label="Name"
                  className="mt-1 min-h-11 w-full rounded-sm border border-stone px-3"
                  type="text"
                  name="name"
                  required
                />
              </label>
              <label className="block text-sm font-medium text-text-dark">
                Email
                <input
                  aria-label="Email"
                  className="mt-1 min-h-11 w-full rounded-sm border border-stone px-3"
                  type="email"
                  name="email"
                  required
                />
              </label>
              <label className="block text-sm font-medium text-text-dark">
                Phone
                <input
                  aria-label="Phone"
                  className="mt-1 min-h-11 w-full rounded-sm border border-stone px-3"
                  type="tel"
                  name="phone"
                  required
                />
              </label>
              <label className="block text-sm font-medium text-text-dark">
                Matter Type
                <select
                  aria-label="Matter Type"
                  className="mt-1 min-h-11 w-full rounded-sm border border-stone px-3"
                  name="matterType"
                  required
                >
                  <option>Real Estate</option>
                  <option>Business Law</option>
                  <option>Civil Litigation</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-text-dark">
                Urgency
                <select
                  aria-label="Urgency"
                  className="mt-1 min-h-11 w-full rounded-sm border border-stone px-3"
                  name="urgency"
                >
                  <option>Standard</option>
                  <option>Urgent - Deadline Within 72 Hours</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-text-dark">
                Message
                <textarea
                  aria-label="Message"
                  className="mt-1 w-full rounded-sm border border-stone px-3 py-2"
                  rows={5}
                  name="message"
                  required
                />
              </label>
              <button
                aria-label="Submit contact form"
                type="submit"
                className="min-h-11 rounded-sm bg-gold px-6 py-3 font-semibold text-navy"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </section>

          <section className="space-y-6">
            <article className="rounded-md bg-white p-8 shadow-soft">
              <h2 className="font-display text-3xl text-navy">Office Information</h2>
              <p className="mt-3 text-text-muted">
                {PRIMARY_ADDRESS_LINE_1}
                <br />
                {PRIMARY_CITY_STATE_ZIP}
                <br />
                {SECONDARY_ADDRESS_LINE_1}
                <br />
                {SECONDARY_CITY_STATE_ZIP}
              </p>
              <p className="mt-2 text-text-muted">
                Phone:{' '}
                <a aria-label="Call Murray Legal" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-text-muted">
                Email:{' '}
                <a aria-label="Email Murray Legal" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
              <p className="mt-2 text-text-muted">Hours: Monday–Friday, 8:30 AM–6:00 PM</p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
