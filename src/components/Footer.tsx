import { Link } from '../lib/router';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-navy text-stone">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <section>
          <h2 className="font-display text-3xl text-ivory">Murray Legal</h2>
          <p className="mt-3 text-sm leading-6 text-stone">
            Boutique legal counsel for real estate, corporate governance, litigation, and strategic transactions
            across Yonkers, Westchester County, and greater New York.
          </p>
          <p className="mt-4 text-sm">Phone: <a aria-label="Call Murray Legal" href="tel:+19145550199">(914) 555-0199</a></p>
          <p className="text-sm">Email: <a aria-label="Email Murray Legal" href="mailto:info@murraylegal.com">info@murraylegal.com</a></p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-ivory">Practice Areas</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link ariaLabel="Real Estate Attorney" to="/real-estate-attorney">Real Estate Attorney</Link></li>
            <li><Link ariaLabel="Corporate Law" to="/corporate-law">Corporate Law</Link></li>
            <li><Link ariaLabel="Civil Litigation" to="/civil-litigation">Civil Litigation</Link></li>
            <li><Link ariaLabel="Entertainment Law" to="/entertainment-law">Entertainment Law</Link></li>
            <li><Link ariaLabel="Sports Transactions" to="/sports-transactions">Sports Transactions</Link></li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-ivory">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link ariaLabel="Frequently asked questions" to="/faq">FAQ</Link></li>
            <li><Link ariaLabel="Contact Murray Legal" to="/contact">Contact</Link></li>
            <li><a aria-label="Disclaimer" href="https://murraylegal.com/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</a></li>
          </ul>
        </section>
      </div>
      <div className="border-t border-ivory/20 px-4 py-4 text-center text-xs text-stone">
        © 2026 Murray Legal · Attorney Advertising · Privacy Policy
      </div>
    </footer>
  );
}
