"use client";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SearchBar from "../common/SearchBar";
import IndexingCards from "./IndexingCards";

export default function SidebarComponent({ isOpen, setIsOpen }) {

  // Bloquear scroll del body cuando sidebar esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative flex h-full">
      {/* Backdrop solo en móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          bg-gray-50 shadow-lg transition-all duration-300 flex flex-col
          overflow-hidden z-50

          fixed top-0 right-0 h-full
          ${isOpen ? "w-80" : "w-0"}

          xl:relative xl:top-auto xl:right-auto xl:h-auto xl:my-4
          ${isOpen ? "xl:w-96 xl:rounded-md xl:mb-4" : "xl:w-0"}
        `}
      >
        {isOpen && (
          <>
            <div className="w-full max-w-sm min-w-[200px] px-4 pt-3 space-x-2">
              <SearchBar />
            </div>

            <div className="flex-1 p-5 text-base space-y-4 overflow-y-auto">
              <h1 className="text-xl font-semibold text-tec-blue-primary mb-4 border-b pb-2">
                Revista Digital Matemática
              </h1>

              <p>
                La revista digital{" "}
                <span className="font-bold">Matemática, Educación e Internet</span>{" "}
                es una publicación semestral y gratuita…
              </p>

              <p>
                Todos los artículos enviados son revisados por pares…
                <a
                  href="https://revistas.tec.ac.cr/index.php/matematica"
                  className="text-[#012D50] underline"
                >
                  Consultar sitio institucional
                </a>
                .
              </p>

              <div className="p-2 border-t">
                <button className="w-full bg-tec-red-primary text-white font-bold py-2 rounded-md hover:bg-tec-red-primary/90 transform transition-transform duration-200 hover:scale-105">
                  Suscribirse
                </button>
              </div>

              <IndexingCards />
            </div>
          </>
        )}
      </div>

      {/* Botón toggle */}
      <button
        className={`
          absolute top-1/2 -translate-y-1/2 z-50 transform transition-transform duration-200 hover:scale-125 text-black
          ${isOpen ? "right-80 xl:right-96" : "right-1"}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
        <span className="sr-only">Toggle side</span>
      </button>
    </div>
  );
}
