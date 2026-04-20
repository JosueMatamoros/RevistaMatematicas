import { issues } from "@/data/issues";
import { slugify } from "@/lib/slugify";

// Deriva categorías dinámicamente de todos los issues (issues ya vienen ordenados de más reciente a más antiguo).
// Agrupa por slug para tolerar variaciones de mayúsculas ("Didáctica y software" == "Didáctica y Software").
// Artículos con category vacío o ausente quedan excluidos.
function buildCategories() {
  const map = new Map(); // slug -> { label, articles[] }

  for (const issue of issues) {
    const articles = issue.data?.articles ?? [];
    for (const article of articles) {
      const raw = (article.category ?? "").trim();
      if (!raw) continue;

      const slug = slugify(raw);
      if (!map.has(slug)) {
        map.set(slug, { label: raw, articles: [] });
      }
      map.get(slug).articles.push({
        ...article,
        issueId: issue.id,
        volume: issue.volume,
        number: issue.number,
        date: issue.date,
      });
    }
  }

  return Array.from(map.entries())
    .map(([slug, { label, articles }]) => ({ slug, label, count: articles.length, articles }))
    .sort((a, b) => b.count - a.count);
}

export const categories = buildCategories();

// Array ligero para el nav (slug + label + count, sin artículos)
export const categoryNav = categories.map(({ slug, label, count }) => ({ slug, label, count }));
