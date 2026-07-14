// Minimal YAML-frontmatter parser — no external deps needed.
// Handles simple `key: value` pairs and `tags: [a, b, c]` style arrays,
// which is all a blog post needs.
export function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw.trim());

  if (!match) {
    return { data: {}, content: raw };
  }

  const [, block, content] = match;
  const data = {};

  block.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }

    data[key] = value;
  });

  return { data, content: content.trim() };
}
