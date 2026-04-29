import { EMAIL, FIRM_NAME, JURISDICTION_NOTICE, PHONE_DISPLAY, PHONE_TEL } from '../lib/firm';
import { Link } from '../lib/router';

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[rgba(184,151,42,0.25)] bg-navy-deep text-stone">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 xl:grid-cols-4">
        <section>
          <h2 className="font-display text-[2rem] text-ivory">{FIRM_NAME}</h2>
          <span className="mt-4 block h-[2px] w-6 bg-gold" aria-hidden="true" />
          <p className="mt-4 text-[0.85rem] leading-7 text-stone/70">
            Boutique legal counsel with an office in Yonkers and Pennsylvania licensure for real estate, business,
            corporate governance, civil litigation, personal injury, entertainment, and sports transaction matters.
          </p>
          <p className="mt-4 text-[0.85rem] text-stone/70">
            Phone:{' '}
            <a href={`tel:${PHONE_TEL}`} aria-label="Call Murray Legal" className="text-stone/80 hover:text-gold">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-[0.85rem] text-stone/70">
            Email:{' '}
            <a href={`mailto:${EMAIL}`} aria-label="Email Murray Legal" className="text-stone/80 hover:text-gold">
              {EMAIL}
            </a>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-ivory">Practice Areas</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link ariaLabel="Real Estate Attorney" to="/real-estate-attorney">Real Estate Attorney</Link></li>
            <li><Link ariaLabel="Corporate Law" to="/corporate-law">Corporate Law</Link></li>
            <li><Link ariaLabel="Civil Litigation" to="/civil-litigation">Civil Litigation</Link></li>
            <li><Link ariaLabel="Personal Injury" to="/civil-litigation/personal-injury">Personal Injury</Link></li>
            <li><Link ariaLabel="Legal Blog" to="/blog">Legal Blog</Link></li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-ivory">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link ariaLabel="About Murray Legal" to="/about">About</Link></li>
            <li><Link ariaLabel="Frequently asked questions" to="/faq">FAQ</Link></li>
            <li><Link ariaLabel="Contact Murray Legal" to="/contact">Contact</Link></li>
            <li><Link ariaLabel="Disclaimer" to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </section>

        <section>
          <span className="section-label">Office & Jurisdiction</span>
          <ul className="space-y-3 text-[0.85rem] text-stone/70">
            <li>Office: Yonkers, NY</li>
            <li>Licensed jurisdiction: Pennsylvania</li>
            <li>Nationwide client matters where permitted by law</li>
          </ul>
          <div className="mt-5 border border-[rgba(184,151,42,0.25)] p-4 text-[0.8rem] italic text-stone/50">
            {JURISDICTION_NOTICE}
          </div>
        </section>
      </div>
      <div className="border-t border-ivory/20 px-4 py-4 text-center text-xs text-stone">
        Attorney Advertising. Prior results do not guarantee a similar outcome. © 2026 {FIRM_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
