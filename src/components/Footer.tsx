import { Link } from '../lib/router';

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[rgba(184,151,42,0.25)] bg-navy-deep text-stone">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 xl:grid-cols-4">
        <section>
          <h2 className="font-display text-[2rem] text-ivory">Murray Legal</h2>
          <span className="mt-4 block h-[2px] w-6 bg-gold" aria-hidden="true" />
          <p className="mt-4 text-[0.85rem] leading-7 text-stone/70">
            Boutique legal counsel in Yonkers and New York for real estate, business law, corporate governance, civil
            litigation, and personal injury matters.
          </p>
          <p className="mt-4 text-[0.85rem] text-stone/70">
            Phone:{' '}
            <a href="tel:+19145550199" aria-label="Call Murray Legal" className="text-stone/80 hover:text-gold">
              (914) 555-0199
            </a>
          </p>
          <p className="text-[0.85rem] text-stone/70">
            Email:{' '}
            <a href="mailto:info@murraylegal.com" aria-label="Email Murray Legal" className="text-stone/80 hover:text-gold">
              info@murraylegal.com
            </a>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-ivory">Practice Areas</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link ariaLabel="Real Estate Attorney" to="/real-estate-attorney">
                Real Estate Attorney
              </Link>
            </li>
            <li>
              <Link ariaLabel="Corporate Law" to="/corporate-law">
                Corporate Law
              </Link>
            </li>
            <li>
              <Link ariaLabel="Civil Litigation" to="/civil-litigation">
                Civil Litigation
              </Link>
            </li>
            <li>
              <Link ariaLabel="Personal Injury" to="/civil-litigation">
                Personal Injury
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-ivory">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link ariaLabel="About Murray Legal" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link ariaLabel="Frequently asked questions" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link ariaLabel="Contact Murray Legal" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link ariaLabel="Disclaimer" to="/disclaimer">
                Disclaimer
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <span className="section-label">Serving</span>
          <ul className="space-y-3 text-[0.85rem] text-stone/70">
            <li>Yonkers, NY</li>
            <li>Westchester County</li>
            <li>Greater New York</li>
          </ul>
          <div className="mt-5 border border-[rgba(184,151,42,0.25)] p-4 text-[0.8rem] italic text-stone/50">
            Licensed to practice law in the State of New York.
          </div>
        </section>
      </div>
      <div className="border-t border-ivory/20 px-4 py-4 text-center text-xs text-stone">
        Attorney Advertising. Prior results do not guarantee a similar outcome. © 2026 Murray Legal. All rights
        reserved.
      </div>
    </footer>
  );
}
