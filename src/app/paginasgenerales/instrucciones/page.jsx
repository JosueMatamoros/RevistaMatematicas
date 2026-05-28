"use client";

import NavsComponent from "@/components/home/NavsComponent";
import Link from "next/link";
import { FaFileAlt, FaBook, FaArrowRight } from "react-icons/fa";

export default function InstruccionesPage() {
  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-8">
        {/* Encabezado */}
        <div className="text-center mb-8 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Instrucciones para publicar
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center max-w-2xl">
            Guía para autores de la{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Revista Digital Matemática, Educación e Internet
            </span>
          </p>
        </div>

        {/* Texto general */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="p-6 bg-gray-50 border-l-4 border-tec-red-primary rounded-lg shadow-sm text-gray-700 leading-relaxed font-alt text-justify">
            <p>
              La revista acepta dos tipos de publicaciones académicas: artículos
              de investigación y libros académicos. Ambas modalidades son de
              acceso abierto y gratuitas. Antes de enviar su propuesta, le
              recomendamos leer detenidamente las instrucciones correspondientes
              al tipo de publicación que desea realizar.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Artículos */}
          <Link
            href="/paginasgenerales/instrucciones/articulos"
            className="relative flex flex-col gap-4 p-7 rounded-2xl border border-gray-200 bg-white hover:border-tec-red-primary hover:shadow-lg transition-all duration-300 group shadow-sm overflow-hidden"
          >
            {/* Detalle decorativo */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-tec-red-primary/5 rounded-bl-full group-hover:bg-tec-red-primary/10 transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-12 h-12 bg-tec-red-primary/8 rounded-bl-full group-hover:bg-tec-red-primary/15 transition-colors duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-tec-red-primary/10 flex items-center justify-center group-hover:bg-tec-red-primary transition-colors duration-300 flex-shrink-0">
              <FaFileAlt className="text-tec-red-primary group-hover:text-white text-2xl transition-colors duration-300" />
            </div>

            <div className="flex-1">
              <p className="text-xl font-bold text-slate-800 group-hover:text-tec-red-primary transition-colors duration-300">
                Artículos
              </p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Envía un artículo de investigación, revisión o divulgación
                matemática para su arbitraje y publicación.
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm font-medium text-tec-red-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver instrucciones <FaArrowRight className="text-xs" />
            </div>
          </Link>

          {/* Libros */}
          <Link
            href="/paginasgenerales/instrucciones/libros"
            className="relative flex flex-col gap-4 p-7 rounded-2xl border border-gray-200 bg-white hover:border-tec-red-primary hover:shadow-lg transition-all duration-300 group shadow-sm overflow-hidden"
          >
            {/* Detalle decorativo */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-tec-red-primary/5 rounded-bl-full group-hover:bg-tec-red-primary/10 transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-12 h-12 bg-tec-red-primary/8 rounded-bl-full group-hover:bg-tec-red-primary/15 transition-colors duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-tec-red-primary/10 flex items-center justify-center group-hover:bg-tec-red-primary transition-colors duration-300 flex-shrink-0">
              <FaBook className="text-tec-red-primary group-hover:text-white text-2xl transition-colors duration-300" />
            </div>

            <div className="flex-1">
              <p className="text-xl font-bold text-slate-800 group-hover:text-tec-red-primary transition-colors duration-300">
                Libros
              </p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Propón un libro académico en acceso abierto vinculado con las
                áreas de interés de la revista.
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm font-medium text-tec-red-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver instrucciones <FaArrowRight className="text-xs" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
