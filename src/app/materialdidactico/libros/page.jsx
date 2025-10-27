"use client";

import BooksCard from "@/components/books/BooksCard";
import primariaData from "@/data/libros-interactivos/primaria.json";
import universitariaDataInteractivos from "@/data/libros-interactivos/universitaria.json";
import universitariaData from "@/data/libros/universitaria.json";
import { withBasePath } from "@/lib/basePath";
import NavsComponent from "@/components/home/NavsComponent";

export default function Page() {
  // Normaliza URLs para cada libro
  const normalizeBook = (book) => ({
    ...book,
    coverImage: withBasePath(book.coverImage),
    mainPDF: { ...book.mainPDF, url: withBasePath(book.mainPDF.url) },
    resources: book.resources
      ? book.resources.map((r) => ({
          ...r,
          url: withBasePath(r.url),
        }))
      : [],
  });

  // Convierte objetos a arrays y normaliza
  const primariaBooksInteractive =
    Object.values(primariaData).map(normalizeBook);
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
        {allInteractiveBooks.map((book, index) => (
          <BooksCard key={index} {...book} />
        ))}
      </div>

      <div className="text-center py-6 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Libros
          </h1>
        </div>
        <p className="text-gray-500 text-lg mt-3 font-light text-center">
         Libros en formato PDF para consultar y reforzar conocimientos teóricos.
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
