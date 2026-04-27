import { issues } from "@/data/issues";

function normalize(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function buildSearchText(article, issue) {
  const parts = [
    article.title,
    article.title_en,
    article.title_pt,
    ...(article.authors?.map((a) => `${a.name} ${a.university} ${a.location}`) ?? []),
    article.abstract_es,
    article.abstract_en,
    article.abstract_pt,
    ...(article.keywords_es ?? []),
    ...(article.keywords_en ?? []),
    ...(article.keywords_pt ?? []),
    article.category,
    issue.data.issueTitle,
  ];
  return normalize(parts.filter(Boolean).join(" "));
}

export const searchIndex = issues.flatMap((issue) =>
  (issue.data.articles || []).map((article) => ({
    ...article,
    issueId: issue.id,
    issueTitle: issue.data.issueTitle,
    issueDate: issue.date,
    volume: issue.volume,
    number: issue.number,
    _searchText: buildSearchText(article, issue),
  }))
);

export function searchArticles(query) {
  if (!query || query.trim().length < 2) return [];
  const terms = normalize(query.trim())
    .split(/\s+/)
    .filter((t) => t.length >= 2);
  if (terms.length === 0) return [];
  return searchIndex.filter((article) =>
    terms.every((term) => article._searchText.includes(term))
  );
}
