import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';

const sections = [
  {
    title: 'Attorney Advertising Notice',
    body: 'Murray Legal is a law firm licensed to practice in the States of New York and Pennsylvania. This website constitutes attorney advertising under applicable Rules of Professional Conduct.',
  },
  {
    title: 'No Legal Advice',
    body: 'The materials on this website are provided for general informational purposes only and do not constitute legal advice. Viewing or using this website does not create an attorney-client relationship between you and Murray Legal or any of its attorneys. An attorney-client relationship is established only through a signed written engagement agreement.',
  },
  {
    title: 'No Guarantee of Results',
    body: 'Prior results described on this website do not guarantee or suggest a similar outcome in future matters. Every legal matter is unique. Results depend on the specific facts and applicable law of each case.',
  },
  {
    title: 'Jurisdictional Limitations',
    body: 'Murray Legal is licensed to practice law in New York and Pennsylvania. If you are located outside New York or Pennsylvania, contact with this firm does not constitute legal representation, and the firm may not be licensed to practice in your jurisdiction.',
  },
  {
    title: 'Contact',
    body: 'To obtain legal advice specific to your situation, contact Murray Legal directly to schedule a consultation.',
  },
];

export default function Disclaimer(): JSX.Element {
  return (
    <>
      <SEOHead
        title="Attorney Advertising Disclaimer | Murray Legal"
        description="Read Murray Legal's attorney advertising disclaimer, legal notice, and jurisdictional limitations."
        canonical="https://murraylegal.com/disclaimer"
      />
      <main className="bg-ivory px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-[680px]">
          <span className="section-label">Legal Notice</span>
          <span className="gold-rule" aria-hidden="true" />
          <h1 className="font-display text-display-lg text-navy">Attorney Advertising Disclaimer</h1>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-display-sm text-navy">{section.title}</h2>
                <p className="mt-3 text-[0.95rem] text-text-muted">{section.body}</p>
                <span className="mt-8 block h-[2px] w-12 bg-gold/80" aria-hidden="true" />
              </section>
            ))}
          </div>
        </div>
      </main>
      <ConsultationCTA />
    </>
  );
}
