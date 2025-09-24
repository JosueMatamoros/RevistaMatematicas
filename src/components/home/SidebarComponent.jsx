"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // xl en adelante visible
        setIsOpen(true);
      } else {
        // sm, md, lg oculto
        setIsOpen(false);
      }
    };

    // Estado inicial al montar
    handleResize();

    // Escucha cambios de tamaño
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          ${isOpen ? "w-80" : "w-0"}
          overflow-hidden
          xl:relative xl:h-full xl:my-4 xl:${
            isOpen ? "w-96 border rounded-xl" : "w-0 rounded-none"
          }
          ${
            isOpen
              ? "fixed top-0 right-0 h-full z-50 xl:static"
              : "fixed top-0 right-0 h-full z-50 xl:static"
          }
        `}
      >
        {isOpen && (
          <>
            <div className="w-full max-w-sm min-w-[200px] px-4 pt-3 space-x-2 ">
              <div className="relative w-full max-w-md hidden md:block">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none shadow-sm"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-tec-blue-primary hover:bg-tec-blue-primary/90 text-white p-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  <IoSearchSharp size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 p-5 text-base space-y-4">
              <h1 className="text-xl font-semibold text-tec-blue-primary mb-4 border-b pb-2">
                Revista Digital Matemática
              </h1>

              <p>
                La revista digital{" "}
                <span className="font-bold">
                  Matemática, Educación e Internet
                </span>{" "}
                es una publicación semestral, gratuita y de acceso abierto,
                fundada en el año 2000 y auspiciada por el Instituto Tecnológico
                de Costa Rica. Publica artículos originales de investigación,
                teóricos y aplicados, en matemática, enseñanza de la matemática
                y temas afines.
              </p>
              <p>
                Todos los artículos enviados son revisados por pares bajo un
                proceso de revisión doble ciega. Su público meta son docentes,
                estudiantes e investigadores en matemática y enseñanza de la
                matemática.{" "}
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
            </div>
          </>
        )}
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 -left-7 text-black transform transition-transform duration-200 hover:scale-125 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </button>
    </div>
  );
}
