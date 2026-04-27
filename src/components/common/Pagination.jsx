"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [1];
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <nav
      aria-label="Paginación"
      className="flex items-center justify-center gap-1 mt-10"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className="flex items-center justify-center w-9 h-9 rounded-md text-tec-blue-primary hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <FaChevronLeft size={13} />
      </button>

      {getPages().map((page, i) =>
        page === "..." ? (
          <span
            key={`dots-${i}`}
            className="flex items-center justify-center w-9 h-9 text-slate-400 select-none text-sm"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-label={`Página ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex items-center justify-center w-9 h-9 rounded-md text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-tec-blue-primary text-white shadow-sm"
                : "text-tec-blue-primary hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className="flex items-center justify-center w-9 h-9 rounded-md text-tec-blue-primary hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <FaChevronRight size={13} />
      </button>
    </nav>
  );
}
