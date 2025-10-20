"use client";

import BooksCard from "@/components/books/BooksCard";
import { withBasePath } from "@/lib/basePath";

export default function Page() {
  const baseBookPath = withBasePath("/libros/primaria/relaciones-algebra-3");

  const bookData = {
    coverImage: `${baseBookPath}/portada.png`,
    title:
      "Relaciones y Álgebra. Educación virtual para estudiantes de tercer año de primaria",
    englishTitle:
      "Relations and Algebra. Virtual education for third grade elementary students",
    authors: [
      "Rebeca Solís Ortega",
      "Zuleyka Suárez Valdés-Ayala",
      "Ivonne Sánchez Fernández",
      "Carlos Monge Madriz",
      "Luis Gerardo Meza Cascante",
      "Evelyn Agüero Calvo"
    ],
    lastRevision: "Agosto 2024",
    mainPDF: {
      type: "pdf",
      label: "Descargar",
      url: `${baseBookPath}/libro.pdf`
    },
    resources: [
      {
        type: "pdf",
        label: "Folleto de práctica",
        url: `${baseBookPath}/folleto-practica.pdf`
      },
      {
        type: "zip",
        label: "Carpeta comprimida con videos",
        url: `${baseBookPath}/videos.zip`
      },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <BooksCard {...bookData} />
    </div>
  );
}
