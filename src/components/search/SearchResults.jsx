"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchArticles } from "@/lib/searchIndex";
import { Card, CardBody, Typography, Chip } from "@material-tailwind/react";
import { FaFilePdf } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { withFullUrl } from "@/lib/basePath";
import Pagination from "@/components/common/Pagination";

const RESULTS_PER_PAGE = 10;

// Splits text by matched query terms and wraps matches in <mark>
function Highlight({ text, query }) {
  if (!text || !query) return <>{text}</>;
  const terms = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length >= 2);
  if (!terms.length) return <>{text}</>;
  const pattern = terms
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="bg-yellow-100 text-tec-blue-primary font-semibold rounded px-0.5 not-italic"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Returns a short excerpt around the first query match
function getSnippet(text, query, maxLen = 220) {
  if (!text) return "";
  const trimmed = text.slice(0, maxLen);
  if (!query || query.trim().length < 2)
    return trimmed + (text.length > maxLen ? "…" : "");
  const terms = query.trim().split(/\s+/).filter((t) => t.length >= 2);
  if (!terms.length) return trimmed + (text.length > maxLen ? "…" : "");
  const pattern = terms
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const match = new RegExp(pattern, "i").exec(text);
  if (!match) return trimmed + (text.length > maxLen ? "…" : "");
  const start = Math.max(0, match.index - 80);
  const end = Math.min(text.length, match.index + 140);
  return (
    (start > 0 ? "…" : "") +
    text.slice(start, end) +
    (end < text.length ? "…" : "")
  );
}

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [inputValue, setInputValue] = useState(urlQuery);
  const [page, setPage] = useState(1);

  // Tracks the last query we set via debounce to avoid echo-syncing
  const pendingQuery = useRef(urlQuery);

  // Sync URL → input when navigating here from another page (e.g. sidebar)
  useEffect(() => {
    if (urlQuery !== pendingQuery.current) {
      setInputValue(urlQuery);
      setPage(1);
      pendingQuery.current = urlQuery;
    }
  }, [urlQuery]);

  // Debounce: update URL as user types (for shareable links)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const trimmed = inputValue.trim();
    pendingQuery.current = trimmed;
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (trimmed) params.set("q", trimmed);
      router.replace(`/buscar?${params.toString()}`, { scroll: false });
    }, 400);
    return () => clearTimeout(timer);
  }, [inputValue, router]);

  // Reset to page 1 when query changes
  const prevInput = useRef(inputValue);
  useEffect(() => {
    if (prevInput.current !== inputValue) {
      setPage(1);
      prevInput.current = inputValue;
    }
  }, [inputValue]);

  const results =
    inputValue.trim().length >= 2 ? searchArticles(inputValue) : [];
  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
  const paginated = results.slice(
    (page - 1) * RESULTS_PER_PAGE,
    page * RESULTS_PER_PAGE
  );

  const handleCardClick = (slug) => router.push(`/${slug}`);

  const handlePdfClick = (e, pdf) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(withFullUrl(pdf), "_blank");
  };

  const isEmpty = inputValue.trim().length === 0;
  const isTooShort = inputValue.trim().length === 1;
  const hasQuery = inputValue.trim().length >= 2;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back button */}
      <div className="mb-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-tec-blue-primary transition-colors group"
        >
          <FaArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
          Volver al inicio
        </Link>
      </div>

      {/* Header */}
      <Typography
        variant="h3"
        className="font-display font-bold text-tec-blue-primary mb-6 border-b-2 border-tec-red-primary pb-2 w-fit"
      >
        Buscar artículos
      </Typography>

      {/* Search input */}
      <div className="mb-2">
        <div className="relative">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setInputValue("")}
            placeholder="Buscar por título, autor, resumen, palabras clave…"
            autoFocus
            className="w-full rounded-full border-2 border-gray-200 focus:border-tec-blue-secondary py-3 pl-6 pr-14 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none shadow-sm transition-colors"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-tec-blue-primary p-2.5 rounded-full text-white pointer-events-none">
            <IoSearchSharp size={18} />
          </span>
        </div>
        <p className="mt-1.5 text-xs text-slate-400 pl-4">
          Busca en español, inglés o portugués · Mínimo 2 caracteres
        </p>
      </div>

      {/* Result count */}
      {hasQuery && results.length > 0 && (
        <p className="mt-4 mb-1 text-sm text-slate-500">
          <span className="font-semibold text-tec-blue-primary">
            {results.length}
          </span>{" "}
          resultado{results.length !== 1 ? "s" : ""} para{" "}
          <span className="font-semibold">&ldquo;{inputValue.trim()}&rdquo;</span>
        </p>
      )}

      {/* Empty / short / no-results states */}
      {isEmpty && (
        <div className="text-center py-20 text-slate-300">
          <IoSearchSharp size={56} className="mx-auto mb-4" />
          <p className="text-lg text-slate-400">
            Escribe algo para comenzar la búsqueda
          </p>
        </div>
      )}

      {isTooShort && (
        <p className="mt-8 text-center text-slate-400 text-sm">
          Escribe al menos 2 caracteres para buscar.
        </p>
      )}

      {hasQuery && results.length === 0 && (
        <div className="text-center py-16">
          <IoSearchSharp size={48} className="mx-auto mb-3 text-slate-200" />
          <p className="text-slate-500 text-lg">
            No se encontraron artículos para{" "}
            <span className="font-semibold">&ldquo;{inputValue.trim()}&rdquo;</span>
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Intenta con otros términos o en otro idioma.
          </p>
        </div>
      )}

      {/* Results list */}
      {paginated.length > 0 && (
        <div className="space-y-4 mt-4">
          {paginated.map((article) => (
            <Card
              key={`${article.issueId}-${article.id}`}
              onClick={() => handleCardClick(article.slug)}
              className="group border-l-4 border-gray-200 hover:border-l-tec-blue-secondary hover:shadow-md bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              <CardBody className="p-5">
                {/* Issue + category badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-white bg-tec-blue-primary px-2.5 py-0.5 rounded-full">
                    Vol.&nbsp;{article.volume}, N.°&nbsp;{article.number}
                  </span>
                  <span className="text-xs text-slate-400">
                    {article.issueDate}
                  </span>
                  {article.category && (
                    <Chip
                      size="sm"
                      variant="outlined"
                      value={article.category}
                      className="border-blue-200 text-blue-700 bg-blue-50 normal-case text-xs py-0"
                    />
                  )}
                </div>

                {/* Title (ES) */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-alt font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200 mb-1"
                >
                  <Highlight text={article.title} query={inputValue} />
                </Typography>

                {/* Title (EN) */}
                {article.title_en && (
                  <Typography
                    variant="small"
                    className="font-alt text-slate-500 border-l-2 border-slate-200 pl-2 mb-2"
                  >
                    <Highlight text={article.title_en} query={inputValue} />
                  </Typography>
                )}

                {/* Authors */}
                {article.authors?.length > 0 && (
                  <Typography
                    variant="small"
                    className="text-slate-600 font-medium mb-3"
                  >
                    <Highlight
                      text={article.authors.map((a) => a.name).join(", ")}
                      query={inputValue}
                    />
                  </Typography>
                )}

                {/* Abstract snippet */}
                {(article.abstract_es || article.abstract_en) && (
                  <Typography
                    variant="small"
                    className="text-slate-500 leading-relaxed mb-3"
                  >
                    <Highlight
                      text={getSnippet(
                        article.abstract_es || article.abstract_en,
                        inputValue
                      )}
                      query={inputValue}
                    />
                  </Typography>
                )}

                {/* PDF button */}
                {article.pdf && (
                  <button
                    onClick={(e) => handlePdfClick(e, article.pdf)}
                    className="inline-flex items-center gap-1.5 text-xs border border-tec-red-primary text-tec-red-primary hover:bg-red-50 px-3 py-1.5 rounded-md transition-colors mt-1"
                  >
                    <FaFilePdf className="w-3.5 h-3.5" />
                    Descargar PDF
                  </button>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(p) => {
          setPage(p);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
