"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SidebarComponent({ isOpen, setIsOpen }) {
  return (
    <div className="relative flex h-full">
      {/* Sidebar */}
      <div
        className={`bg-gray-50 shadow-lg transition-all duration-300 h-full flex flex-col my-4 ${
          isOpen ? "w-96 border rounded-xl" : "w-0 rounded-none"
        } overflow-hidden`}
      >
        {isOpen && (
          <>
            <div className="w-full max-w-sm min-w-[200px] px-4 pt-4 space-x-2">
              <div className="relative flex items-center">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black/40 rounded-md pl-3 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Buscar Artículos ..."
                />

                <button
                  className="rounded-md bg-tec-blue-primary py-2 px-4 ml-2 border border-transparent text-center text-sm text-white shadow-md hover:bg-tec-blue-primary/95 transform transition-transform duration-200 hover:scale-105 "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 p-5 text-base space-y-4">
              <h2 className="text-lg font-semibold text-tec-blue-primary mb-4 border-b pb-2">
                Revista Digital Matemática
              </h2>

              <p>
                La revista digital{" "}
                <spam className="font-bold">
                  Matemática, Educación e Internet
                </spam>{" "}
                es una publicación semestral, gratuita y de acceso abierto,
                fundada en el año 2000 y auspiciada por el Instituto Tecnológico
                de Costa Rica. Publica artículos originales de investigación,
                teóricos y aplicados, en matemática, enseñanza de la matemática
                y temas afines.
              </p>
              <p>
                Todos los artículos enviados son revisados por pares bajo un
                proceso de revisión doble ciega. Su público meta son docentes,
                estudiantes e investigadores en matemática y enseñanza de la matemática.{" "}
                <a
                  href="https://revistas.tec.ac.cr/index.php/matematica"
                  className="text-[#012D50] underline "
                >
                  Consultar sitio institucional
                </a>
                .
              </p>
              <div className="p-2 border-t">
                <button className="w-full bg-tec-red-primary text-white font-bold py-2 rounded-md hover:bg-tec-red-primary/90  transform transition-transform duration-200 hover:scale-105 ">
                  Suscribirse
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 -left-7 text-black transform transition-transform duration-200 hover:scale-125"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </button>
    </div>
  );
}
