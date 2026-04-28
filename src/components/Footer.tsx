import { Link } from '../lib/router';

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[rgba(184,151,42,0.25)] bg-navy-deep text-stone">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 xl:grid-cols-4">
        <section>
          <h2 className="font-display text-[2rem] text-ivory">Murray Legal</h2>
          <span className="mt-4 block h-[2px] w-6 bg-gold" aria-hidden="true" />
          <p className="mt-4 text-[0.85rem] leading-7 text-stone/60">
            Boutique legal counsel in Yonkers and New York for real estate, business matters, and high-stakes
            litigation strategy.
          </p>
          <p className="mt-4 text-[0.85rem] text-stone/70">
            Phone:{' '}
            <a href="tel:+19145550199" aria-label="Call Murray Legal" className="text-stone/80 hover:text-gold">
              (914) 555-0199 (UPDATE THIS)
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
          <span className="section-label">Practice Areas</span>
          <ul className="space-y-3 text-[0.85rem] text-stone/70">
            <li><Link ariaLabel="Real Estate Attorney" to="/real-estate-attorney">Real Estate Attorney</Link></li>
            <li><Link ariaLabel="Corporate Law" to="/corporate-law">Corporate Law</Link></li>
            <li><Link ariaLabel="Civil Litigation" to="/civil-litigation">Civil Litigation</Link></li>
            <li><Link ariaLabel="Entertainment Law" to="/entertainment-law">Entertainment Law</Link></li>
            <li><Link ariaLabel="Sports Transactions" to="/sports-transactions">Sports Transactions</Link></li>
          </ul>
        </section>

        <section>
          <span className="section-label">Navigation</span>
          <ul className="space-y-3 text-[0.85rem] text-stone/70">
            <li><Link ariaLabel="Frequently asked questions" to="/faq">FAQ</Link></li>
            <li><Link ariaLabel="Contact Murray Legal" to="/contact">Contact</Link></li>
            <li><Link ariaLabel="Attorney Advertising Disclaimer" to="/disclaimer">Disclaimer</Link></li>
            <li><Link ariaLabel="Privacy policy" to="/privacy-policy">Privacy Policy</Link></li>
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
            Licensed to practice law in the State of New York
          </div>
        </section>
      </div>

      <div className="border-t-2 border-[rgba(184,151,42,0.2)] px-4 py-5 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-[0.7rem] text-stone/50 md:flex-row md:text-left">
          <p>© 2026 Murray Legal. All Rights Reserved.</p>
          <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
