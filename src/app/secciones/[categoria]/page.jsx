import { categories } from "@/data/categories";
import CategoryClient from "./CategoryClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ categoria: slug }));
}

export async function generateMetadata({ params }) {
  const cat = categories.find((c) => c.slug === params.categoria);
  if (!cat) return { title: "Sección no encontrada" };
  return {
    title: `${cat.label} — Revista Matemática`,
    description: `${cat.count} artículos en la sección "${cat.label}"`,
  };
}

export default function SeccionPage({ params }) {
  const cat = categories.find((c) => c.slug === params.categoria);
  if (!cat) notFound();

  return <CategoryClient label={cat.label} articles={cat.articles} />;
}
