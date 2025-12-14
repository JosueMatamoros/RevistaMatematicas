import { withFullUrl } from "@/lib/basePath";
import ArticlePage from "@/components/articles/ArticlePage";
import { issues } from "@/data/issues";

// Generar rutas estáticas de artículos con CLEAN ISSUE
export async function generateStaticParams() {
  return issues.flatMap((issue) => {
    const cleanIssue = issue.id.split("_").slice(1).join("_");

    return issue.data.articles
      .filter((a) => a.slug)
      .map((a) => {
        const slug = a.slug.split("/").pop();
        return {
          vol: `V${issue.volume}`,
          issue: cleanIssue,
          slug,
        };
      });
  });
}

// Metadata dinámico
export async function generateMetadata({ params }) {
  const currentIssue = issues.find(
    (i) => `V${i.volume}` === params.vol && i.id.endsWith(params.issue)
  );

  const article = currentIssue?.data.articles.find((a) =>
    a.slug.endsWith(`/${params.slug}`)
  );

  if (!article) return { title: "Artículo no encontrado" };

  return {
    title: article.title,
    description: article.abstract_es || article.title_en || article.title,
  };
}

// Render
export default function Page({ params }) {
  const currentIssue = issues.find(
    (i) => `V${i.volume}` === params.vol && i.id.endsWith(params.issue)
  );

  const article = currentIssue?.data.articles.find((a) =>
    a.slug.endsWith(`/${params.slug}`)
  );

  if (!article) {
    return <div className="p-8 text-red-500">No existe el artículo</div>;
  }

  return <ArticlePage article={article} />;
}
