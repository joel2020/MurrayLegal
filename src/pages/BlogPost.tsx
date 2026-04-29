import SEOHead from '../components/SEOHead';
import { getBlogPostBySlug } from '../data/blogPosts';
import { usePathname, Link } from '../lib/router';

export default function BlogPost(): JSX.Element {
  const pathname = usePathname();
  const slug = pathname.replace('/blog/', '');
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <div className="p-10">Post not found</div>;
  }

  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <SEOHead title={post.metaTitle} description={post.metaDescription} />

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.intro.map((p, i) => (
        <p key={i} className="mb-4">{p}</p>
      ))}

      {post.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-2xl font-semibold">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-3">{p}</p>
          ))}
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        {post.faqs.map((faq) => (
          <div key={faq.question} className="mt-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Related Links</h2>
        <ul>
          {post.internalLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 border-t pt-6 text-sm text-gray-500">
        This article is for general informational purposes only and does not constitute legal advice.
      </div>
    </main>
  );
}
