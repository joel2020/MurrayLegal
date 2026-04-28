import { Link } from '../lib/router';

type PracticeAreaCardProps = {
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export default function PracticeAreaCard({ title, description, href, featured = false }: PracticeAreaCardProps): JSX.Element {
  return (
    <article className={`rounded-md bg-white p-6 shadow-soft ${featured ? 'md:col-span-2' : ''}`}>
      <h3 className="text-xl font-semibold text-text-dark">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-text-muted">{description}</p>
      <Link to={href} ariaLabel={`Learn more about ${title}`} className="mt-4 inline-block min-h-11 py-3 text-sm font-semibold text-navy">
        Learn More →
      </Link>
    </article>
  );
}
