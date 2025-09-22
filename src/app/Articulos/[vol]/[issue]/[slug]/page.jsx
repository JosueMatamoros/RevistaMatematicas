// src/app/Articulos/[vol]/[issue]/[slug]/page.jsx
import { withFullUrl } from "@/lib/basePath";
import ArticlePage from "@/components/articles/ArticlePage";
import issueData from "@/data/issues/N1_2025.json";

// Necesario para rutas estáticas con output: "export"
export async function generateStaticParams() {
  return issueData.articles
    .filter((a) => a.slug)
    .map((a) => {
      const [_, vol, issue, slug] = a.slug.split("/"); // ["Articulos","V26","N1_2025","Alfaro"]
      return { vol, issue, slug };
    });
}

// Metadata dinámico por artículo (Google Scholar)
export async function generateMetadata({ params }) {
  const article = issueData.articles.find(
    (a) => a.slug === `Articulos/${params.vol}/${params.issue}/${params.slug}`
  );
  if (!article) return { title: "Artículo no encontrado" };

  return {
    title: article.title,
    description: article.abstract_es || article.title_en || article.title,
    other: {
      citation_title: article.title,
      citation_author: article.authors?.map((a) => a.name),
      citation_publication_date: "2025/01/01",
      citation_journal_title: "Revista Digital Matemática",
      citation_volume: "26",
      citation_issue: "1",
      citation_language: "es",
      citation_pdf_url: withFullUrl(article.pdf),
    },
  };
}

// Render del artículo
export default function Page({ params }) {
  const article = issueData.articles.find(
    (a) => a.slug === `Articulos/${params.vol}/${params.issue}/${params.slug}`
  );

  if (!article) return <div className="p-8 text-center">No existe el artículo</div>;

  return <ArticlePage article={article} />;
}
