import { ArrowUpRight, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/firm';
import { Link } from '../lib/router';
import Container from './Container';

export default function ConsultationCTA(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-paper sm:py-24 lg:py-28" aria-label="Consultation call to action">
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rotate-45 border border-gold/20" aria-hidden="true" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mt-5 max-w-4xl font-display text-display-lg text-paper">Strategic counsel starts with a focused conversation.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone sm:text-lg">Tell us what is at stake. Murray Legal will evaluate fit, urgency, and jurisdiction before any engagement begins.</p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-stretch">
          <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary justify-between">Schedule a consultation <ArrowUpRight aria-hidden="true" size={17} /></Link>
          <a href={`tel:${PHONE_TEL}`} aria-label="Call Murray Legal" className="btn-outline justify-between"><span className="flex items-center gap-2"><Phone aria-hidden="true" size={16} />{PHONE_DISPLAY}</span><ArrowUpRight aria-hidden="true" size={17} /></a>
        </div>
      </Container>
    </section>
  );
}
