import { withFullUrl } from "@/lib/basePath";
import BookPage from "@/components/books/bookPage";
import primariaDataInteractive from "@/data/libros-interactivos/primaria.json";

// ✅ Generar rutas estáticas a partir de las keys del JSON
export async function generateStaticParams() {
  const ids = Object.entries(primariaDataInteractive)
    .filter(([id, book]) => id && book && book.pdf && book.title)
    .map(([id]) => ({ id }));

  return ids;
}

// ✅ Metadata dinámica para SEO / Google Scholar
export async function generateMetadata({ params }) {
  const book = primariaDataInteractive[params.id];

  if (!book) {
    return { title: "Libro no encontrado" };
  }

  return {
    title: book.title,
    description: book.abstract_es || book.title_en || book.title,
    other: {
      citation_title: book.title,
      citation_author: Array.isArray(book.authors)
        ? book.authors.map((a) => (typeof a === "string" ? a : a.name))
        : [],
      citation_publication_date: book.revised || "Sin fecha",
      citation_journal_title: "Revista Digital Matemática, Educación e Internet",
      citation_publisher: "Instituto Tecnológico de Costa Rica",
      citation_issn: "1659-0643",
      citation_language: "es",
      citation_pdf_url: withFullUrl(book.pdf),
    },
  };
}

// ✅ Normaliza autores y recursos antes de pasar al componente
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

// ✅ Página dinámica
export default function Page({ params }) {
  const book = primariaDataInteractive[params.id];

  if (!book) {
    return (
      <div className="p-8 text-center text-red-500">
        No existe el libro
      </div>
    );
  }

  const normalizedBook = normalizeBook(book);
  return <BookPage book={normalizedBook} />;
}

// 👇 Esto evita que explote con output: export
export const dynamicParams = true;
