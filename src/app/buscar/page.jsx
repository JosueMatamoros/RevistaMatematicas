import { Suspense } from "react";
import SearchResults from "@/components/search/SearchResults";

export const metadata = {
  title: "Buscar artículos",
  description:
    "Busca en todos los artículos de la Revista Digital: Matemática, Educación e Internet. Filtra por título, autor, resumen y palabras clave.",
};

function SearchSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="h-8 w-52 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="h-12 w-full bg-gray-200 rounded-full animate-pulse" />
    </div>
  );
}

export default function BuscarPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<SearchSkeleton />}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
