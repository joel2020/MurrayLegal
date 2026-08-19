import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from '../lib/router';

type SharedProps = {
  children: ReactNode;
  ariaLabel: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  showIcon?: boolean;
};

type ActionLinkProps = SharedProps & (
  | { to: string; href?: never }
  | { href: string; to?: never }
);

export default function ActionLink({ children, ariaLabel, variant = 'primary', className = '', showIcon = true, ...destination }: ActionLinkProps): JSX.Element {
  const classes = `action-link action-link--${variant} ${className}`.trim();
  const content = <>{children}{showIcon && <span className="action-link__icon" aria-hidden="true"><ArrowRight size={15} /></span>}</>;
  return destination.to !== undefined
    ? <Link to={destination.to} ariaLabel={ariaLabel} className={classes}>{content}</Link>
    : <a href={destination.href} aria-label={ariaLabel} className={classes}>{content}</a>;
}
