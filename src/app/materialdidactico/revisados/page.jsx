"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import BooksList from "@/components/books/BooksList";
import revisadoData from "@/data/materialdidactico/revisado.json";

export default function Page() {
  const books = Object.entries(revisadoData).map(([id, book]) => ({
    id,
    ...book,
  }));

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <Typography variant="h3" color="blue-gray" className="font-alt mb-2">
        Material Didáctico Revisado
      </Typography>
      <Typography variant="paragraph" color="gray" className="mb-8">
        Material didáctico que ha sido sometido a un proceso de revisión por pares académicos.
      </Typography>

      <div className="flex flex-col gap-6">
        {books.map((book) => (
          <BooksList
            key={book.id}
            {...book}
            basePath="/materialdidactico/revisados"
          />
        ))}
      </div>
    </section>
  );
}
