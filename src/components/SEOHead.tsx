import { useEffect } from 'react';
import { SITE_URL } from '../lib/firm';

type SEOHeadProps = {
  title: string;
  description: string;
  canonical: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  ogImage?: string;
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

export default function SEOHead({
  title,
  description,
  canonical,
  schema,
  ogImage = `${SITE_URL}/og-image.svg`,
}: SEOHeadProps): null {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: ogImage,
    });
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: ogImage,
    });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    const existingScript = document.head.querySelector('script[data-schema="murray-legal"]') as
      | HTMLScriptElement
      | null;

    if (!schema) {
      existingScript?.remove();
      return;
    }

    const script = existingScript ?? document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'murray-legal');
    script.text = JSON.stringify(schema);

    if (!existingScript) {
      document.head.appendChild(script);
    }
  }, [title, description, canonical, schema, ogImage]);

  return null;
}
