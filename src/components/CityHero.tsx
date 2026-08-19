import ActionLink from './ActionLink';
import Container from './Container';

export default function CityHero(): JSX.Element {
  return (
    <section className="city-hero" data-hero-visual="city" aria-labelledby="home-title">
      <picture className="city-hero__media">
        <source srcSet="/images/murray-legal-manhattan.webp" type="image/webp" />
        <img
          src="/images/murray-legal-manhattan.jpg"
          alt="Monochrome view of the Lower Manhattan skyline"
          width="2400"
          height="1600"
          className="hero-image"
        />
      </picture>
      <Container className="city-hero__layout">
        <div className="city-hero__panel">
          <p className="eyebrow">Murray Legal · Yonkers office</p>
          <h1 id="home-title">Serious counsel for consequential matters.</h1>
          <p>Strategic legal advice for businesses, investors, executives, creators, athletes, families, and private clients.</p>
          <div className="city-hero__actions">
            <ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink>
            <ActionLink to="/about" ariaLabel="Explore the firm" variant="outline" showIcon={false}>Explore the firm</ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
