import { Link } from '../lib/router';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }): JSX.Element {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.13em] text-stone-dark">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="text-gold">/</span>}
            {item.href ? (
              <Link to={item.href} ariaLabel={item.label} className="hover:text-paper">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-paper">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
