import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, formatDate } from "@/lib/blog";

// Custom renderers so markdown output follows the site's theme
// (colors, fonts, spacing) instead of default browser styles.
const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-secondary-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-secondary-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-8 mb-3 text-secondary-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground leading-relaxed mb-5">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 mb-5 text-muted-foreground marker:text-primary">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 mb-5 text-muted-foreground marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/50 pl-6 italic text-foreground my-6">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="px-1.5 py-0.5 rounded-md bg-surface border border-border/50 text-primary text-sm">
        {children}
      </code>
    ) : (
      <code className="text-sm">{children}</code>
    ),
  pre: ({ children }) => (
    <pre className="bg-surface border border-border rounded-2xl p-5 overflow-x-auto mb-6 text-sm">
      {children}
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="text-foreground font-semibold">{children}</strong>
  ),
  hr: () => <hr className="border-border/50 my-10" />,
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-2xl my-6 w-full" />
  ),
};

export const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 relative z-10 pt-16 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <article className="animate-fade-in">
          <header className="mb-10">
            {post.date && (
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {formatDate(post.date)}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
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
          </header>

          <div className="rounded-3xl border border-border p-6 md:p-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </section>
  );
};
