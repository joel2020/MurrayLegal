import { useEffect } from 'react';

type SEOHeadProps = {
  title: string;
  description: string;
  canonical: string;
  schema: Record<string, unknown>;
};

const upsertMeta = (selector: string, attrs: Record<string, string>): void => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
};

const upsertLink = (selector: string, attrs: Record<string, string>): void => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
};

export default function SEOHead({ title, description, canonical, schema }: SEOHeadProps): null {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    let script = document.head.querySelector('script[data-schema="murray-legal"]') as
      | HTMLScriptElement
      | null;

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'murray-legal');
      document.head.appendChild(script);
    }

    script.text = JSON.stringify(schema);
  }, [title, description, canonical, schema]);

  return null;
}
