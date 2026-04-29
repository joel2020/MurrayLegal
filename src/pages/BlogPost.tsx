import SEOHead from '../components/SEOHead';
import { getBlogPostBySlug } from '../data/blogPosts';
import { usePathname, Link } from '../lib/router';
import { blogPostingSchema, faqSchema, breadcrumbSchema } from '../lib/schema';
import { SITE_URL } from '../lib/firm';

export default function BlogPost(): JSX.Element {
  const pathname = usePathname();
  const slug = pathname.replace('/blog/', '');
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <div className="p-10">Post not found</div>;
  }

  const schema = [
    blogPostingSchema({
      slug: post.slug,
      title: post.title,
      description: post.metaDescription,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      category: post.category,
      keywords: post.keywords,
    }),
    ...(post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <SEOHead 
        title={post.metaTitle} 
        description={post.metaDescription}
        canonical={`${SITE_URL}/blog/${post.slug}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      <p className="mb-6 text-lg text-text-muted">
        Murray Legal maintains an office in Yonkers, New York and is licensed in Pennsylvania. The firm works with
        clients on nationwide matters where permitted by law, including through local counsel or jurisdiction-appropriate
        arrangements when needed.
      </p>

      {post.intro.map((p, i) => (
        <p key={i} className="mb-4">{p}</p>
      ))}

      <div className="my-8 rounded-md border border-gold/40 bg-gold/5 p-6">
        <h2 className="text-xl font-semibold text-navy">Discuss Your Legal Matter</h2>
        <p className="mt-2 text-sm text-text-muted">
          If you are facing a legal issue involving real estate, business transactions, or a dispute, Murray Legal can help you
          evaluate your options and next steps where permitted by law.
        </p>
        <Link to="/contact" className="btn-primary mt-4 inline-block" ariaLabel="Contact Murray Legal">
          Request a Consultation
        </Link>
      </div>

      {post.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-2xl font-semibold">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-3">{p}</p>
          ))}
        </section>
      ))}

      {post.faqs.length > 0 && (
        <section className="mt-10 rounded-md border border-[rgba(15,31,61,0.10)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-navy">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-5">
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-navy">{faq.question}</h3>
                <p className="mt-2 text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="my-10 rounded-md border border-navy/20 bg-navy/5 p-6">
        <h2 className="text-xl font-semibold text-navy">Need Legal Guidance?</h2>
        <p className="mt-2 text-sm text-text-muted">
          Murray Legal works with clients on real estate transactions, business matters, and litigation where permitted by law.
        </p>
        <Link to="/contact" className="btn-primary mt-4 inline-block" ariaLabel="Contact Murray Legal">
          Speak With an Attorney
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Related Legal Services</h2>
        <ul>
          {post.internalLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 border-t pt-6 text-sm text-gray-500">
        This article is for general informational purposes only and does not constitute legal advice. Reading this article or contacting Murray Legal through this website does not create an attorney-client relationship.
      </div>
    </main>
  );
}
