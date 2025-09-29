// src/app/Articulos/[vol]/[issue]/[slug]/page.jsx
import { withFullUrl } from "@/lib/basePath";
import ArticlePage from "@/components/articles/ArticlePage";
import { issues } from "@/data/issues";

// Generar todas las combinaciones de artículos
export async function generateStaticParams() {
  return issues.flatMap((issue) =>
    issue.data.articles
      .filter((a) => a.slug)
      .map((a) => {
        const [_, vol, issueId, slug] = a.slug.split("/"); 
        return { vol, issue: issueId, slug };
      })
  );
}

// Metadata dinámico para Google Scholar
export async function generateMetadata({ params }) {
  const issueData = issues.find(
    (i) => `V${i.volume}` === params.vol && i.id === params.issue
  )?.data;

  const article = issueData?.articles.find(
    (a) => a.slug === `Articulos/${params.vol}/${params.issue}/${params.slug}`
  );

  if (!article) return { title: "Artículo no encontrado" };

  // Buscar info del número (para volumen, número y fecha)
  const issueInfo = issues.find(
    (i) => `V${i.volume}` === params.vol && i.id === params.issue
  );

  return {
    title: article.title,
    description: article.abstract_es || article.title_en || article.title,
    other: {
      citation_title: article.title,
      citation_author: article.authors?.map((a) => a.name),
      citation_publication_date: issueInfo?.date || "Sin fecha",
      citation_journal_title: "Revista Digital Matemática, Educación e Internet",
      citation_volume: issueInfo?.volume.toString(),
      citation_issue: issueInfo?.number.toString(),
      citation_language: issueInfo?.language || "es",
      citation_pdf_url: withFullUrl(article.pdf),
    },
  };
}

// Render del artículo
export default function Page({ params }) {
  const issueData = issues.find(
    (i) => `V${i.volume}` === params.vol && i.id === params.issue
  )?.data;

  const article = issueData?.articles.find(
    (a) => a.slug === `Articulos/${params.vol}/${params.issue}/${params.slug}`
  );

  if (!article) {
    return <div className="p-8 text-center text-red-500">No existe el artículo</div>;
  }

  return <ArticlePage article={article} />;
}
