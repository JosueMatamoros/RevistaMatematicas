"use client";

import BooksCard from "@/components/books/BooksCard";
import primariaDataInteractive from "@/data/libros-interactivos/primaria.json";
import universitariaDataInteractivos from "@/data/libros-interactivos/universitaria.json";
import universitariaData from "@/data/libros/universitaria.json";
import { withBasePath } from "@/lib/basePath";
import NavsComponent from "@/components/home/NavsComponent";

export default function Page() {
  // Normaliza URLs para cada libro
  const normalizeBook = (book) => ({
    ...book,
    coverImage: withBasePath(book.coverImage),
    pdf: withBasePath(book.pdf),
    resources: book.resources
      ? book.resources.map((r) => ({
          ...r,
          url: withBasePath(r.url),
        }))
      : [],
  });

  // Convierte objetos a arrays y normaliza
  const primariaBooksInteractive = Object.entries(primariaDataInteractive).map(
    ([id, book]) => ({
      id,
      ...normalizeBook(book),
    })
  );
  const universitariaBooksInteractive = Object.values(
    universitariaDataInteractivos
  ).map(normalizeBook);
  const universitariaBooks =
    Object.values(universitariaData).map(normalizeBook);

  const allInteractiveBooks = [
    ...primariaBooksInteractive,
    ...universitariaBooksInteractive,
  ];

  const allBooks = [...universitariaBooks];

  return (
    <div>
      <NavsComponent />
      {/* Encabezado */}
      <div className="text-center py-6 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Libros Interactivos
          </h1>
        </div>
        <p className="text-gray-500 text-lg mt-3 font-light text-center">
          Libros con ejercicios y videos interactivos para aprender de forma
          práctica.
        </p>
      </div>

      {/* Lista de libros */}
      <div className="container mx-auto px-6 mb-8 space-y-8">
        {allInteractiveBooks.map((book) => (
          <BooksCard key={book.id} {...book} />
        ))}
      </div>

      <div className="text-center py-6 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Libros
          </h1>
        </div>
        <p className="text-gray-500 text-lg mt-3 font-light text-center">
          Libros en formato PDF para consultar y reforzar conocimientos
          teóricos.
        </p>
      </div>

      {/* Lista de libros */}
      <div className="container mx-auto px-6 mb-8 space-y-8">
        {allBooks.map((book, index) => (
          <BooksCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
}
