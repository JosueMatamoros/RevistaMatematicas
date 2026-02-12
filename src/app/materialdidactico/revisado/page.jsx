"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import BooksList from "@/components/books/BooksList";
import ArticlesList from "@/components/articles/ArticlesList";
import NavsComponent from "@/components/home/NavsComponent";
import revisadoData from "@/data/materialdidactico/revisado.json";

export default function Page() {
  // Procesar libros
  const books = Object.entries(revisadoData.libros || {}).map(([id, book]) => ({
    id,
    ...book,
  }));

  // Procesar artículos (secciones)
  const articleSections = revisadoData.articulos?.sections || [];

  return (
    <div>
      <NavsComponent />

      <section className="py-8 px-4 max-w-6xl mx-auto">
        {/* Título principal estilo instrucciones */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary mb-4">
            Material Didáctico Revisado
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-3xl mx-auto">
            Material didáctico que ha sido sometido a un proceso de revisión por pares académicos
            en la revista <span className="font-semibold text-tec-blue-secondary">Matemática, Educación e Internet</span>.
          </p>
        </div>

        {/* Sección de Artículos */}
        {articleSections.length > 0 && articleSections.some(s => s.articles?.length > 0) && (
          <ArticlesList
            sections={articleSections}
            basePath="/materialdidactico/revisado"
            noPadding
          />
        )}

        {/* Sección de Libros */}
        {books.length > 0 && (
          <>
            <Typography variant="h4" className="font-display mb-4 font-bold border-b-2 border-tec-red-primary w-fit">
              Libros
            </Typography>
            <div className="flex flex-col gap-6 mb-10">
              {books.map((book) => (
                <BooksList
                  key={book.id}
                  {...book}
                  basePath="/materialdidactico/revisado"
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
