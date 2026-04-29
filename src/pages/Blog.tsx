import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogPosts';
import { SITE_URL } from '../lib/firm';
import { Link } from '../lib/router';

const clusterOrder = ['Real Estate Law', 'Residential Real Estate', 'Commercial Real Estate', 'Land Use & Zoning', 'Corporate Law', 'Civil Litigation', 'Personal Injury', 'Entertainment & Sports'];

export default function Blog(): JSX.Element {
  const groupedPosts = clusterOrder
    .map((category) => ({ category, posts: blogPosts.filter((post) => post.category === category) }))
    .filter((group) => group.posts.length > 0);

  return (
    <main className="bg-ivory px-6 py-16">
      <SEOHead
        title="Murray Legal Blog | Real Estate, Business & Litigation Legal Guides"
        description="Legal guides from Murray Legal on real estate, business law, civil litigation, and transactions in Yonkers, Westchester County, New York, and Pennsylvania."
        canonical={`${SITE_URL}/blog`}
      />

      <section className="mx-auto max-w-6xl">
        <span className="section-label">Legal Insights</span>
        <h1 className="mt-3 font-display text-5xl text-navy">Legal Guides for Real Estate, Business & Litigation Matters</h1>
        <p className="mt-5 max-w-3xl leading-8 text-text-muted">
          Explore practical legal guides from Murray Legal covering Yonkers real estate transactions, Westchester zoning,
          New York business disputes, corporate governance, civil litigation, personal injury, and entertainment and sports
          contracts. These resources are designed for clients in Yonkers, Westchester County, New York City, and Pennsylvania.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary" ariaLabel="Contact Murray Legal">
            Discuss a Legal Matter
          </Link>
          <Link to="/real-estate-attorney" className="btn-secondary" ariaLabel="View real estate legal services">
            Real Estate Services
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl space-y-12">
        {groupedPosts.map((group) => (
          <div key={group.category}>
            <h2 className="font-display text-3xl text-navy">{group.category}</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {group.posts.map((post) => (
                <article key={post.slug} className="rounded-md border border-[rgba(15,31,61,0.10)] bg-white p-6 shadow-soft">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{post.category}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-navy">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="mt-5 inline-block font-semibold text-navy" ariaLabel={`Read ${post.title}`}>
                    Read Guide →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
