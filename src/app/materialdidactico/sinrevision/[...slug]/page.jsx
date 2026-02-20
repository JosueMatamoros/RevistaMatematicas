import { withFullUrl, withBasePath } from "@/lib/basePath";
import ArticlePage from "@/components/articles/ArticlePage";
import NavsComponent from "@/components/home/NavsComponent";
import sinRevisionData from "@/data/materialdidactico/sinrevision.json";

const allArticles = (sinRevisionData.articulos?.sections || []).reduce((acc, section) => {
  (section.articles || []).forEach((article) => {
    if (article.slug) {
      acc[article.slug] = article;
    }
  });
  return acc;
}, {});

export async function generateStaticParams() {
  return Object.keys(allArticles).map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({ params }) {
  const slugPath = params.slug.join("/");
  const article = allArticles[slugPath];

  if (!article) {
    return { title: "Material no encontrado" };
  }

  return {
    title: article.title,
    description: article.abstract_es || article.title_en || article.title,
    other: {
      citation_title: article.title,
      citation_author: Array.isArray(article.authors)
        ? article.authors.map((a) => (typeof a === "string" ? a : a.name))
        : [],
      citation_publication_date: article.published || "Sin fecha",
      citation_journal_title: "Revista Digital Matemática, Educación e Internet",
      citation_publisher: "Instituto Tecnológico de Costa Rica",
      citation_issn: "1659-0643",
      citation_language: "es",
      citation_pdf_url: withFullUrl(article.pdf),
    },
  };
}

function normalizeArticle(article) {
  return {
    ...article,
    pdf: withBasePath(article.pdf),
    authors: Array.isArray(article.authors)
      ? article.authors.map((a) =>
          typeof a === "string" ? { name: a } : a
        )
      : [],
  };
}

export default function Page({ params }) {
  const slugPath = params.slug.join("/");
  const article = allArticles[slugPath];

  if (!article) {
    return (
      <div>
        <NavsComponent />
        <div className="p-8 text-center text-red-500">
          No existe el material
        </div>
      </div>
    );
  }

  const normalizedArticle = normalizeArticle(article);

  return (
    <div>
      <NavsComponent />
      <ArticlePage article={normalizedArticle} />
    </div>
  );
}

export const dynamicParams = true;
