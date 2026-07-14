import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/blog";

export const Blog = () => {
  const posts = getAllPosts();

  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      {/* Bg glows — consistent with the rest of the site */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 pt-16">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Writing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            From the{" "}
            <span className="font-serif italic font-normal text-white">
              blog.
            </span>
          </h1>
          <p className="text-muted-foreground">
            Notes on what I'm building, what I'm learning, and the occasional
            debugging war story.
          </p>
        </div>

        {/* Posts list */}
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {posts.map((post, idx) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block glass rounded-2xl p-6 md:p-8 animate-fade-in hover:border-primary/40 border border-transparent transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    {post.date && (
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {formatDate(post.date)}
                      </p>
                    )}
                    <h2 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-muted-foreground text-sm">
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
