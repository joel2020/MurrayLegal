import { ArrowUpRight } from 'lucide-react';
import { Link } from '../lib/router';

type PracticeAreaCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export default function PracticeAreaCard({ category, title, description, href, featured = false }: PracticeAreaCardProps): JSX.Element {
  return (
    <article className={`counsel-card ${featured ? 'md:col-span-2' : ''}`} data-counsel-card>
      <Link to={href} ariaLabel={`Explore ${title}`} className="counsel-card__link">
        <span className="counsel-card__category">{category}</span>
        <span className="counsel-card__arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
        <span className="counsel-card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </span>
      </Link>
    </article>
  );
}
