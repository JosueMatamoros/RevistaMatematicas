import { withFullUrl } from "@/lib/basePath";
import BookPage from "@/components/books/BookPage";
import revisadoData from "@/data/materialdidactico/revisado.json";

export async function generateStaticParams() {
  const ids = Object.entries(revisadoData)
    .filter(([id, book]) => id && book && book.pdf && book.title)
    .map(([id]) => ({ id }));

  return ids;
}

export async function generateMetadata({ params }) {
  const book = revisadoData[params.id];

  if (!book) {
    return { title: "Material no encontrado" };
  }

  return {
    title: book.title,
    description: book.abstract_es || book.title_en || book.title,
    other: {
      citation_title: book.title,
      citation_author: Array.isArray(book.authors)
        ? book.authors.map((a) => (typeof a === "string" ? a : a.name))
        : [],
      citation_publication_date: book.revised || book.lastRevision || "Sin fecha",
      citation_journal_title: "Revista Digital Matemática, Educación e Internet",
      citation_publisher: "Instituto Tecnológico de Costa Rica",
      citation_issn: "1659-0643",
      citation_language: "es",
      citation_pdf_url: withFullUrl(book.pdf),
    },
  };
}

function normalizeBook(book) {
  return {
    ...book,
    pdf: withFullUrl(book.pdf),
    authors: Array.isArray(book.authors)
      ? book.authors.map((a) =>
          typeof a === "string" ? { name: a } : a
        )
      : [],
    resources: book.resources
      ? book.resources.map((r) => ({
          ...r,
          url: withFullUrl(r.url),
        }))
      : [],
  };
}

export default function Page({ params }) {
  const book = revisadoData[params.id];

  if (!book) {
    return (
      <div className="p-8 text-center text-red-500">
        No existe el material
      </div>
    );
  }

  const normalizedBook = normalizeBook(book);
  return <BookPage book={normalizedBook} />;
}

export const dynamicParams = true;
