import { withFullUrl } from "@/lib/basePath";
import BookPage from "@/components/books/BookPage";
import ArticlePage from "@/components/articles/ArticlePage";
import NavsComponent from "@/components/home/NavsComponent";
import revisadoData from "@/data/materialdidactico/revisado.json";

const allBooks = revisadoData.libros || {};

// Extraer todos los artículos de las secciones
const allArticles = (revisadoData.articulos?.sections || []).reduce((acc, section) => {
  (section.articles || []).forEach((article) => {
    if (article.slug) {
      acc[article.slug] = article;
    }
  });
  return acc;
}, {});

// Función para encontrar el item (libro o artículo) por slug
function findItem(slugPath) {
  // slugPath es el slug completo (puede tener /)
  if (allBooks[slugPath]) {
    return { type: "book", data: allBooks[slugPath] };
  }
  if (allArticles[slugPath]) {
    return { type: "article", data: allArticles[slugPath] };
  }
  return null;
}

export async function generateStaticParams() {
  const bookParams = Object.entries(allBooks)
    .filter(([id, book]) => id && book && book.pdf && book.title)
    .map(([id]) => ({ slug: id.split("/") }));

  const articleParams = Object.keys(allArticles).map((slug) => ({
    slug: slug.split("/")
  }));

  return [...bookParams, ...articleParams];
}

export async function generateMetadata({ params }) {
  const slugPath = params.slug.join("/");
  const item = findItem(slugPath);

  if (!item) {
    return { title: "Material no encontrado" };
  }

  const data = item.data;

  return {
    title: data.title,
    description: data.abstract_es || data.title_en || data.title,
    other: {
      citation_title: data.title,
      citation_author: Array.isArray(data.authors)
        ? data.authors.map((a) => (typeof a === "string" ? a : a.name))
        : [],
      citation_publication_date: data.revised || data.lastRevision || data.published || "Sin fecha",
      citation_journal_title: "Revista Digital Matemática, Educación e Internet",
      citation_publisher: "Instituto Tecnológico de Costa Rica",
      citation_issn: "1659-0643",
      citation_language: "es",
      citation_pdf_url: withFullUrl(data.pdf),
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

function normalizeArticle(article) {
  return {
    ...article,
    pdf: withFullUrl(article.pdf),
    authors: Array.isArray(article.authors)
      ? article.authors.map((a) =>
          typeof a === "string" ? { name: a } : a
        )
      : [],
  };
}

export default function Page({ params }) {
  const slugPath = params.slug.join("/");
  const item = findItem(slugPath);

  if (!item) {
    return (
      <div>
        <NavsComponent />
        <div className="p-8 text-center text-red-500">
          No existe el material
        </div>
      </div>
    );
  }

  if (item.type === "book") {
    const normalizedBook = normalizeBook(item.data);
    return (
      <div>
        <NavsComponent />
        <BookPage book={normalizedBook} showBreadcrumb={false} />
      </div>
    );
  }

  if (item.type === "article") {
    const normalizedArticle = normalizeArticle(item.data);
    return (
      <div>
        <NavsComponent />
        <ArticlePage article={normalizedArticle} />
      </div>
    );
  }

  return null;
}

export const dynamicParams = true;
