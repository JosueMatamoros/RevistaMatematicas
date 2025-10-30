// src/components/books/bookPage.jsx
"use client";

import { useState } from "react";
import { withBasePath, withFullUrl } from "@/lib/basePath";
import { FaFilePdf, FaShareAlt, FaCopy, FaChevronDown, FaChevronUp } from "react-icons/fa";
import BreadcrumbNav from "@/components/articles/BreadcrumbNav";

export default function bookPage({ book }) {
  const pdfAbs = withFullUrl(book.pdf);

  // Estados para los toggles
  const [showResumen, setShowResumen] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);
  const [showResumo, setShowResumo] = useState(false);

  return (
    <div className="min-h-screen bg-white mb-16">
      <div className="mt-2 mb-2">
        <BreadcrumbNav />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
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
                    <img
                      src={withBasePath("/logoORCID.png")}
                      alt="ORCID"
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

        {/* Fechas y acciones */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {book.received && book.accepted ? (
              <>
                <span className="font-semibold">Recibido:</span> {book.received}
                <span className="mx-2 text-gray-400">|</span>
                <span className="font-semibold">Aceptado:</span> {book.accepted}
              </>
            ) : (
              <>
                <span className="font-semibold">Última revisión:</span>{" "}
                {book.lastRevision || "Marzo 2023"}
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfAbs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm"
            >
              Descargar <FaFilePdf className="text-red-600 w-4 h-4" />
            </a>
            <a
              href={pdfAbs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-blue-secondary text-tec-blue-secondary hover:bg-blue-50 text-sm"
            >
              Compartir <FaShareAlt className="text-blue-600 w-4 h-4" />
            </a>
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
          <div className="flex justify-between mb-2">
            <h2 className="text-base font-bold text-gray-900">Cómo citar</h2>
            <FaCopy className="w-4 h-4 text-gray-800" />
          </div>
          <p className="text-sm text-gray-800">{book.citation}</p>
        </section>

        {/* PDF */}
        <section className="mt-6">
          <div className="border-2 rounded-lg overflow-hidden">
            <iframe
              loading="lazy"
              src={withBasePath(book.pdf)}
              className="w-full h-dvh"
              title={`Artículo completo - ${book.title}`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
