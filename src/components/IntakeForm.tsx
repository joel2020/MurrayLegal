import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRef, useState, type FormEvent } from 'react';
import { practiceAreas } from '../data/practiceAreas';

export type IntakePayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  practiceArea: string;
  jurisdiction: string;
  urgency: string;
  contactMethod: string;
  matterDescription: string;
  consent: boolean;
  pageUrl: string;
};

type FormFields = Omit<IntakePayload, 'pageUrl'> & { website: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

const emptyFields: FormFields = { name: '', email: '', phone: '', company: '', practiceArea: '', jurisdiction: '', urgency: '', contactMethod: '', matterDescription: '', consent: false, website: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function IntakeForm(): JSX.Element {
  const [fields, setFields] = useState<FormFields>(emptyFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const submittingRef = useRef(false);

  const update = (name: keyof FormFields, value: string | boolean): void => {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
    if (status !== 'submitting') setStatus('idle');
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!fields.name.trim()) next.name = 'Enter your full name.';
    if (!fields.email.trim()) next.email = 'Enter your email address.';
    else if (!emailPattern.test(fields.email)) next.email = 'Enter a valid email address.';
    if (!fields.phone.trim()) next.phone = 'Enter your phone number.';
    if (!fields.practiceArea) next.practiceArea = 'Select a practice area.';
    if (!fields.jurisdiction.trim()) next.jurisdiction = 'Enter the state or jurisdiction connected to the matter.';
    if (!fields.matterDescription.trim()) next.matterDescription = 'Provide a brief, non-confidential description.';
    if (!fields.consent) next.consent = 'Confirm that you understand the intake terms.';
    return next;
  };

  const submit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (submittingRef.current) return;
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      requestAnimationFrame(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    submittingRef.current = true;
    setStatus('submitting');
    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, pageUrl: window.location.href }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setFields(emptyFields);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submittingRef.current = false;
    }
  };

  const inputProps = (name: keyof FormFields) => ({
    id: name,
    name,
    value: String(fields[name]),
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => update(name, event.target.value),
  });

  const ErrorText = ({ name }: { name: keyof FormFields }): JSX.Element | null => errors[name] ? <p id={`${name}-error`} className="mt-2 text-sm font-semibold text-red-800">{errors[name]}</p> : null;

  if (status === 'success') {
    return <div className="border border-gold/40 bg-paper p-8 sm:p-10" role="status" aria-live="polite"><CheckCircle2 className="text-gold-dark" size={34} aria-hidden="true" /><h2 className="mt-6 font-display text-4xl text-ink">Your request has been received.</h2><p className="mt-5 text-base leading-8 text-muted">Murray Legal will review the information for fit, conflicts, and jurisdiction. No attorney-client relationship exists unless the firm confirms an engagement in writing.</p><button className="btn-secondary mt-7" type="button" onClick={() => setStatus('idle')}>Submit another request</button></div>;
  }

  return <form className="border border-ink/15 bg-paper p-6 sm:p-9" onSubmit={submit} noValidate>
    <div><p className="eyebrow">Consultation request</p><h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Tell us what is at stake.</h2><p className="mt-4 text-sm leading-7 text-muted"><span aria-hidden="true">*</span> Required fields. Do not include confidential or time-sensitive information.</p></div>
    {status === 'error' && Object.keys(errors).length === 0 && <p className="mt-6 border-l-2 border-red-800 bg-red-50 p-4 text-sm font-semibold text-red-900" role="alert">We could not send your request. Your information is still here—please try again or call the firm.</p>}
    {status === 'error' && Object.keys(errors).length > 0 && <p className="mt-6 border-l-2 border-red-800 bg-red-50 p-4 text-sm font-semibold text-red-900" role="alert">Review the highlighted fields before sending your request.</p>}
    <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-ink" htmlFor="name">Full name *</label><div className="sm:col-start-1"><input className="field !mt-0" autoComplete="name" {...inputProps('name')} /><ErrorText name="name" /></div>
      <label className="text-sm font-semibold text-ink sm:col-start-2 sm:row-start-1" htmlFor="email">Email address *</label><div className="sm:col-start-2 sm:row-start-2"><input className="field !mt-0" type="email" autoComplete="email" spellCheck={false} {...inputProps('email')} /><ErrorText name="email" /></div>
      <div><label className="text-sm font-semibold text-ink" htmlFor="phone">Phone number *</label><input className="field" type="tel" autoComplete="tel" {...inputProps('phone')} /><ErrorText name="phone" /></div>
      <div><label className="text-sm font-semibold text-ink" htmlFor="company">Company or organization</label><input className="field" autoComplete="organization" {...inputProps('company')} /></div>
      <div><label className="text-sm font-semibold text-ink" htmlFor="practiceArea">Practice area *</label><select className="field" {...inputProps('practiceArea')}><option value="">Select one</option>{practiceAreas.map((area) => <option key={area.slug} value={area.name}>{area.name}</option>)}<option value="Not sure">Not sure</option></select><ErrorText name="practiceArea" /></div>
      <div><label className="text-sm font-semibold text-ink" htmlFor="jurisdiction">State or jurisdiction *</label><input className="field" autoComplete="address-level1" placeholder="e.g., Pennsylvania…" {...inputProps('jurisdiction')} /><ErrorText name="jurisdiction" /></div>
      <div><label className="text-sm font-semibold text-ink" htmlFor="urgency">Timing</label><select className="field" {...inputProps('urgency')}><option value="">Select one</option><option>Immediate deadline</option><option>Within one week</option><option>Within one month</option><option>Planning ahead</option></select></div>
      <div><label className="text-sm font-semibold text-ink" htmlFor="contactMethod">Preferred contact method</label><select className="field" {...inputProps('contactMethod')}><option value="">Select one</option><option>Email</option><option>Phone</option><option>Either</option></select></div>
      <div className="sm:col-span-2"><label className="text-sm font-semibold text-ink" htmlFor="matterDescription">Brief description of the matter *</label><textarea className="field min-h-40 resize-y" maxLength={4000} {...inputProps('matterDescription')} /><div className="flex items-start justify-between gap-4"><ErrorText name="matterDescription" /><p className="mt-2 ml-auto text-xs text-muted">{fields.matterDescription.length}/4000</p></div></div>
      <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => update('website', event.target.value)} /></div>
      <div className="sm:col-span-2"><label className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-muted" htmlFor="consent"><input id="consent" name="consent" type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#b08a32]" checked={fields.consent} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} onChange={(event) => update('consent', event.target.checked)} /><span>I understand that submitting this form does not create an attorney-client relationship and that I should not send confidential information. *</span></label><ErrorText name="consent" /></div>
    </div>
    <button className="btn-primary mt-8 w-full justify-between sm:w-auto" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending request…' : 'Request a consultation'}<ArrowRight size={17} aria-hidden="true" /></button>
  </form>;
}
