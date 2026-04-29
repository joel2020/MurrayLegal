import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogPosts';
import { Link } from '../lib/router';

export default function Blog(): JSX.Element {
  return (
    <main className="px-6 py-16">
      <SEOHead
        title="Murray Legal Blog | Real Estate, Business & Litigation Legal Guides"
        description="Legal guides from Murray Legal on real estate, business law, civil litigation, and transactions in Yonkers, Westchester County, New York, and Pennsylvania."
      />

      <h1 className="text-4xl font-bold mb-8">Legal Insights</h1>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border p-6 rounded">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>

            <Link to={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-600">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
