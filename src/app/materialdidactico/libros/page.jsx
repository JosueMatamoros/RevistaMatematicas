"use client";

import BooksCard from "@/components/books/BooksCard";
import primariaData from "@/data/libros/primaria.json";
import { withBasePath } from "@/lib/basePath";

export default function Page() {
  // Normaliza URLs para cada libro
  const normalizeBook = (book) => ({
    ...book,
    coverImage: withBasePath(book.coverImage),
    mainPDF: { ...book.mainPDF, url: withBasePath(book.mainPDF.url) },
    resources: book.resources.map((r) => ({
      ...r,
      url: withBasePath(r.url),
    })),
  });

  // Convierte el objeto en array y normaliza cada libro
  const booksArray = Object.values(primariaData).map(normalizeBook);

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      {booksArray.map((book, index) => (
        <BooksCard key={index} {...book} />
      ))}
    </div>
  );
}
