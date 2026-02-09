import { issues } from "@/data/issues";
import ArticlesList from "@/components/articles/ArticlesList";

// Generar rutas estáticas correctas
export function generateStaticParams() {
  return issues.map((issue) => {
    const clean = issue.id.split("_").slice(1).join("_"); // N1_2025
    return {
      vol: `V${issue.volume}`,
      issue: clean
    };
  });
}

export async function generateMetadata({ params }) {
  const current = issues.find(
    i => `V${i.volume}` === params.vol && i.id.endsWith(params.issue)
  );

  if (!current) return { title: "Número no encontrado" };

  return {
    title: `Volumen ${current.volume}, Número ${current.number}`,
    description: `${current.date} — Revista Digital Matemática, Educación e Internet`,
  };
}

export default function IssuePage({ params }) {
  const current = issues.find(
    i => `V${i.volume}` === params.vol && i.id.endsWith(params.issue)
  );

  if (!current) {
    return <div className="p-8 text-red-500">Número no encontrado</div>;
  }

  const books = current.data.books || [];
  return (
    <div>
      <ArticlesList
        title={`Volumen ${current.volume}, Número ${current.number}, ${current.date}`}
        articles={current.data.articles}
        books={books}
      />
    </div>
  );
}
