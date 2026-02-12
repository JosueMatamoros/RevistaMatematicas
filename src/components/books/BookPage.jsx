// src/components/books/BookPage.jsx
"use client";

import { useState } from "react";
import { withBasePath} from "@/lib/basePath";
import {
  FaFilePdf,
  FaShareAlt,
  FaCopy,
  FaChevronDown,
  FaChevronUp,
  FaFileArchive,
} from "react-icons/fa";
import BreadcrumbNav from "@/components/articles/BreadcrumbNav";
import Image from "next/image";

export default function BookPage({ book, showBreadcrumb = true }) {

  const [showResumen, setShowResumen] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const [copied, setCopied] = useState("");
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: book.title,
          text: book.title,
          url: pageUrl,
        });
      } catch (err) {}
    } else {
      try {
        await navigator.clipboard.writeText(pageUrl);
        setCopied("Enlace copiado");
        setTimeout(() => setCopied(""), 2000);
      } catch (err) {
        setCopied("No se pudo copiar");
        setTimeout(() => setCopied(""), 2000);
      }
    }
  };
  const [showResumo, setShowResumo] = useState(false);

  return (
    <div className="min-h-screen bg-white mb-16">
      {showBreadcrumb && (
        <div className="mt-2 mb-2">
          <BreadcrumbNav />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight pt-4">
            {book.title}
          </h1>
          {book.title_en && (
            <p className="text-lg text-gray-500 font-light">{book.title_en}</p>
          )}
        </div>

        {/* Autores */}
        <div className="mb-6 flex flex-wrap gap-4 justify-center">
          {book.authors?.map((a, i) => (
            <div
              key={i}
              className="flex-1 min-w-[320px] max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="font-bold text-base text-gray-900">{a.name}</h3>
                {a.orcid && (
                  <a href={a.orcid} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={withBasePath("/logoORCID.png")}
                      alt="ORCID"
                      width={20}
                      height={20}
                      className="w-5 h-5 inline-block"
                    />
                  </a>
                )}
              </div>
              {a.email && (
                <p className="text-tec-blue-secondary text-sm mb-2">
                  {a.email}
                </p>
              )}
              <div className="text-sm text-gray-600 space-y-0.5">
                {a.university && <p className="font-medium">{a.university}</p>}
                {a.location && <p className="text-gray-500">{a.location}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-2 md:gap-0">
          {/* Acciones: botones */}
          <div className="flex items-center gap-3 order-1 md:order-none justify-center md:justify-end mb-2 md:mb-0">
            <a
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm"
            >
              Descargar <FaFilePdf className="text-red-600 w-4 h-4" />
            </a>
            {/* Botón ZIP si existe */}
            {book.resources && Array.isArray(book.resources) && book.resources.some(r => r.type === "zip") && (
              <a
                href={book.resources.find(r => r.type === "zip").url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-yellow-500 text-yellow-700 hover:bg-yellow-50 text-sm"
                download
              >
                <span className="hidden md:block ">Descargar </span> ZIP <FaFileArchive className="text-yellow-600 w-4 h-4" />
              </a>
            )}
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-blue-secondary text-tec-blue-secondary hover:bg-blue-50 text-sm"
              >
                Compartir <FaShareAlt className="text-blue-600 w-4 h-4" />
              </button>

            </div>
          </div>
          {/* Fechas */}
          <div className="text-sm text-gray-600 text-center md:text-left order-2 md:order-none">
            {book.received && book.accepted ? (
              <>
                <span className="font-semibold">Recibido:</span> {book.received}
                <span className="mx-2 text-gray-400">|</span>
                <span className="font-semibold">Aceptado:</span> {book.accepted}
              </>
            ) : (
              <div className="text-center md:text-left">
                <span className="font-semibold">Última revisión:</span>{" "}
                {book.lastRevision}
              </div>
            )}
          </div>
        </div>

        {/* RESUMEN */}
        {book.abstract_es && (
          <section className="font-alt rounded-lg p-4 mt-5 border-l-4 border-l-tec-blue-secondary">
            <button
              onClick={() => setShowResumen(!showResumen)}
              className="flex w-full justify-between items-center text-lg font-bold text-tec-blue-primary mb-3 md:cursor-default"
            >
              <span>Resumen</span>
              <span className="md:hidden">
                {showResumen ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            <div
              className={`text-gray-800 text-sm leading-relaxed text-justify ${
                showResumen ? "block" : "hidden md:block"
              }`}
            >
              {book.abstract_es}
            </div>

            {book.keywords_es?.length > 0 && (
              <div
                className={`mt-3 flex flex-wrap gap-2 ${
                  showResumen ? "flex" : "hidden md:flex"
                }`}
              >
                {book.keywords_es.map((k) => (
                  <span
                    key={k}
                    className="px-3 py-1 bg-blue-100 text-tec-blue-primary rounded-full text-sm border border-blue-200"
                  >
                    {k}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ABSTRACT */}
        {book.abstract_en && (
          <section className="font-alt rounded-lg p-4 mt-5 border-l-4 border-l-tec-red-primary">
            <button
              onClick={() => setShowAbstract(!showAbstract)}
              className="flex w-full justify-between items-center text-lg font-bold text-red-800 mb-3 md:cursor-default"
            >
              <span>Abstract</span>
              <span className="md:hidden">
                {showAbstract ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            <div
              className={`text-gray-800 text-sm leading-relaxed text-justify ${
                showAbstract ? "block" : "hidden md:block"
              }`}
            >
              {book.abstract_en}
            </div>

            {book.keywords_en?.length > 0 && (
              <div
                className={`mt-3 flex flex-wrap gap-2 ${
                  showAbstract ? "flex" : "hidden md:flex"
                }`}
              >
                {book.keywords_en.map((k) => (
                  <span
                    key={k}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm border border-red-200"
                  >
                    {k}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/* RESUMO */}
        {book.abstract_pt && (
          <section className="font-alt rounded-lg p-4 mt-5 border-l-4 border-l-gray-400">
            <button
              onClick={() => setShowResumo(!showResumo)}
              className="flex w-full justify-between items-center text-lg font-bold text-gray-700 mb-3 md:cursor-default"
            >
              <span>Resumo</span>
              <span className="md:hidden">
                {showResumo ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            <div
              className={`text-gray-800 text-sm leading-relaxed text-justify ${
                showResumo ? "block" : "hidden md:block"
              }`}
            >
              {book.abstract_pt}
            </div>

            {book.keywords_pt?.length > 0 && (
              <div
                className={`mt-3 flex flex-wrap gap-2 ${
                  showResumo ? "flex" : "hidden md:flex"
                }`}
              >
                {book.keywords_pt.map((k) => (
                  <span
                    key={k}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-300"
                  >
                    {k}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Cita */}
        <section className="bg-gray-50 rounded-lg p-3 border mt-5">
          <div className="flex justify-between items-center mb-2 relative">
            <h2 className="text-base font-bold text-gray-900">Cómo citar</h2>
            <div className="relative flex flex-col items-center">
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(
                      book.citation.replace(/<[^>]+>/g, "")
                    );
                    setCopied("Copiado");
                  } catch {
                    setCopied("No se pudo copiar");
                  }
                  setTimeout(() => setCopied(""), 2000);
                }}
                className="focus:outline-none"
                title="Copiar cita"
              >
                <FaCopy className="w-4 h-4 text-gray-800 hover:text-blue-600 transition-colors" />
                {copied && (
                  <span
                    className={`absolute bottom-full mb-2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap z-10
                      ${copied === "Copiado" ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-red-100 text-red-700 border border-red-200"}
                      left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0`
                    }
                    style={{ left: '10px' }}
                  >
                    {copied}
                  </span>
                )}
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-800 break-words break-all whitespace-pre-line" dangerouslySetInnerHTML={{ __html: book.citation }} />
        </section>

        {/* PDF */}
        <section className="mt-6 flex justify-center">
          <div className="w-full md:w-4/5 lg:w-3/4 border rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <iframe
              loading="lazy"
              src={book.pdf}
              className="w-full h-[65vh] md:h-[100vh] border-0"
              title={`Artículo completo - ${book.title}`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
