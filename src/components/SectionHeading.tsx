type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps): JSX.Element {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`.trim()}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-9 bg-gold" aria-hidden="true" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      )}
      <h2 className={`${eyebrow ? 'mt-5' : ''} font-display text-display-lg text-ink`}>{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
