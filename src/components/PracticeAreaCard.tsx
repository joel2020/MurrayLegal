import { ArrowUpRight } from 'lucide-react';
import { Link } from '../lib/router';

type PracticeAreaCardProps = {
  number?: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export default function PracticeAreaCard({ number, title, description, href, featured = false }: PracticeAreaCardProps): JSX.Element {
  return (
    <article className={`group flex min-h-72 flex-col border-b border-r border-ink/15 bg-transparent p-6 transition hover:bg-paper sm:p-7 ${featured ? 'md:col-span-2' : ''}`}>
      {number && <p className="text-xs font-semibold tracking-[0.12em] text-gold-dark">{number}</p>}
      <h3 className="mt-8 font-display text-3xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
      <Link to={href} ariaLabel={`View ${title}`} className="mt-auto flex min-h-12 items-end justify-between gap-4 pt-7 text-sm font-bold text-ink transition group-hover:text-gold-dark">
        View practice <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
