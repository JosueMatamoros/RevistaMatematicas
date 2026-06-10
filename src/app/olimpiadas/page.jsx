"use client";

import BooksList from "@/components/books/BooksList";
import NavsComponent from "@/components/home/NavsComponent";
import universitariaData from "@/data/libros/universitaria.json";
import { withBasePath } from "@/lib/basePath";

export default function OlimpiadasPage() {
  const normalizeBook = (book) => ({
    ...book,
    coverImage: withBasePath(book.coverImage),
    pdf: withBasePath(book.pdf),
    resources: book.resources
      ? book.resources.map((r) => ({ ...r, url: withBasePath(r.url) }))
      : [],
  });

  const olimpiadasBooks = Object.entries(universitariaData)
    .filter(([, book]) => book.coverImage?.includes("/olimpiadas/"))
    .map(([id, book]) => ({ id, ...normalizeBook(book) }));

  return (
    <div>
      <NavsComponent />
      <div className="container mx-auto px-6 py-6">
        <div className="text-center mb-8 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Olimpiadas de Matemáticas
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light max-w-2xl text-center">
            Recursos de las Olimpiadas Costarricenses de Matemáticas (OLCOMA).
          </p>
        </div>

        <div className="space-y-8">
          {olimpiadasBooks.map((book) => (
            <BooksList key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}
