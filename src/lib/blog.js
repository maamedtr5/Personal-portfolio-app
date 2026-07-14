import { parseFrontmatter } from "./frontmatter";

// Vite loads every .md file in this folder as a raw string at build time.
// Drop a new markdown file in src/content/blog/ and it shows up automatically —
// no other code changes needed.
const modules = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const posts = Object.entries(modules).map(([filepath, raw]) => {
  const slug = filepath.split("/").pop().replace(/\.md$/, "");
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    content,
  };
});

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
