import type { ReactNode } from 'react';

type ContainerElement = 'div' | 'section' | 'article' | 'nav';

type ContainerProps = {
  as?: ContainerElement;
  className?: string;
  children: ReactNode;
};

export default function Container({ as: Element = 'div', className = '', children }: ContainerProps): JSX.Element {
  return (
    <Element className={`mx-auto w-full max-w-[82rem] px-5 sm:px-8 lg:px-12 ${className}`.trim()}>
      {children}
    </Element>
  );
}
