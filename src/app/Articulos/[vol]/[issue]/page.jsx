// src/app/Articulos/[vol]/[issue]/page.jsx
import { issues } from "@/data/issues";
import ArticlesList from "@/components/articles/ArticlesList";
import HeaderComponent from "@/components/home/HeaderComponent";
import BreadcrumbNav from "@/components/articles/BreadcrumbNav";

// Generar todas las combinaciones de vol/issue
export function generateStaticParams() {
  return issues.map((issue) => ({
    vol: `V${issue.volume}`,
    issue: issue.id,
  }));
}

export async function generateMetadata({ params }) {
  const current = issues.find(
    (i) => `V${i.volume}` === params.vol && i.id === params.issue
  );

  if (!current) return { title: "Número no encontrado" };

  return {
    title: `Volumen ${current.volume}, Número ${current.number}`,
    description: `${current.date} — Revista Digital Matemática, Educación e Internet`,
  };
}

export default function IssuePage({ params }) {
  const { vol, issue } = params;

  const current = issues.find((i) => `V${i.volume}` === vol && i.id === issue);

  if (!current) {
    return <div className="p-8 text-red-500">Número no encontrado</div>;
  }

  return (
    <div>
      <HeaderComponent />
      <BreadcrumbNav />
      <ArticlesList
        title={`Volumen ${current.volume}, Número ${current.number}, ${current.date}`}
        articles={current.data.articles}
      />
    </div>
  );
}
