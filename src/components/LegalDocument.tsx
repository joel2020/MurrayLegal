import Container from './Container';
import PageHero from './PageHero';

type LegalSection = { heading: string; paragraphs: string[] };

export default function LegalDocument({ title, description, updated, sections }: { title: string; description: string; updated: string; sections: LegalSection[] }): JSX.Element {
  return <>
    <PageHero visual="solid" eyebrow="Legal information" title={title} description={description} breadcrumbs={[{ label: 'Home', href: '/' }, { label: title }]} aside={<p className="text-sm leading-7">Last updated<br /><span className="text-paper">{updated}</span></p>} />
    <Container className="py-16 sm:py-20 lg:py-28"><article className="prose-legal max-w-3xl">{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</article></Container>
  </>;
}
