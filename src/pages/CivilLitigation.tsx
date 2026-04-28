import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';

export default function CivilLitigation(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Civil Litigation Attorney Yonkers NY | Murray Legal"
        description="Murray Legal handles civil litigation in New York including business disputes, breach of contract, and personal injury. Direct attorney representation."
        canonical="https://murraylegal.com/civil-litigation"
      />

      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Civil Litigation Attorney in Yonkers &amp; Westchester</h1>
        <p className="mt-4 max-w-4xl leading-8 text-text-muted">
          Civil litigation in New York demands preparation, precision, and a clear strategy for resolution. Murray
          Legal represents plaintiffs and defendants in business disputes and personal injury claims across Westchester
          County and New York State. The firm's litigation approach is built around documented facts, sound legal
          theory, and realistic assessment of settlement versus trial value — not prolonged litigation for its own
          sake. Clients receive direct counsel from the attorney managing their matter, with regular communication and
          transparent assessment at every stage.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">Business Dispute Litigation</h2>
          <p className="mt-3 text-sm text-text-muted">
            When a business relationship breaks down, the outcome depends on legal preparation, contract analysis, and
            litigation strategy. Murray Legal represents businesses in commercial disputes from pre-litigation demand
            through trial or arbitration.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-muted">
            <li>Breach of contract claims and defenses</li>
            <li>Partnership and LLC member disputes</li>
            <li>Shareholder litigation and buyout disputes</li>
            <li>Trade secret and non-compete enforcement</li>
            <li>Commercial fraud and misrepresentation claims</li>
          </ul>
        </article>

        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">Personal Injury Representation</h2>
          <p className="mt-3 text-sm text-text-muted">
            Injury cases succeed when liability is documented early, damages are developed fully, and the claim is
            managed with the precision of a commercial litigation matter. Murray Legal represents injured plaintiffs
            in New York on a contingency basis for qualifying matters.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-muted">
            <li>Motor vehicle and truck accident claims</li>
            <li>Premises liability (slip and fall, unsafe conditions)</li>
            <li>Wrongful death claims</li>
            <li>General negligence</li>
            <li>Construction site injury</li>
            <li>Insurance dispute and negotiation</li>
          </ul>
        </article>
      </section>

      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
