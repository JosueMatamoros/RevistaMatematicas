"use client";

import NavsComponent from "@/components/home/NavsComponent";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function InstruccionesLibrosPage() {
  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            href="/paginasgenerales/instrucciones"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-tec-blue-primary transition-colors duration-300"
          >
            <FaArrowLeft className="text-xs" />
            Volver a instrucciones
          </Link>
        </div>

        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Instrucciones para la publicación de libros
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center max-w-2xl">
            Información para autores interesados en publicar un libro académico
            en la{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Revista Digital Matemática, Educación e Internet
            </span>
          </p>
        </div>

        {/* Contenido */}
        <div className="text-gray-800 leading-relaxed font-alt text-justify space-y-8">

          {/* Intro */}
          <div className="p-6 bg-gray-50 border-l-4 border-tec-red-primary rounded-lg shadow-sm">
            <p>
              La{" "}
              <span className="font-semibold text-tec-red-primary">
                Revista Digital Matemática, Educación e Internet
              </span>{" "}
              publica libros académicos en acceso abierto vinculados con sus
              áreas de interés: matemática, educación matemática, tecnología
              educativa y campos afines.
            </p>
            <p className="mt-3">
              Los libros deben ser obras académicas extensas, originales y
              orientadas a la producción, sistematización o análisis de
              conocimiento especializado. No se reciben propuestas de carácter
              promocional, administrativo, institucional o materiales que no
              correspondan a una publicación académica.
            </p>
          </div>

          {/* Requisitos generales */}
          <div>
            <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
              1. Requisitos generales
            </h2>
            <p className="mb-3">
              Las propuestas deberán cumplir con los siguientes requisitos:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
              <li>Ser originales e inéditas.</li>
              <li>
                No estar sometidas simultáneamente a evaluación en otra
                editorial, revista o plataforma de publicación.
              </li>
              <li>Presentar una estructura académica clara.</li>
              <li>
                Incluir referencias bibliográficas pertinentes y actualizadas.
              </li>
              <li>
                Estar vinculadas con las áreas temáticas de la revista.
              </li>
              <li>
                Indicar claramente la autoría, filiación institucional y datos
                de contacto de las personas autoras.
              </li>
              <li>
                Contar con autorización para el uso de imágenes, tablas,
                figuras u otros materiales de terceros, cuando corresponda.
              </li>
              <li>
                Presentarse en formato digital editable siguiendo la plantilla
                disponible en{" "}
                <span className="italic text-gray-500">
                  (pendiente enlace de Overleaf de la plantilla)
                </span>
                .
              </li>
            </ul>
          </div>

          {/* Proceso de evaluación */}
          <div>
            <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
              2. Proceso de evaluación
            </h2>
            <p className="mb-4">
              Toda propuesta de libro será revisada inicialmente por el equipo
              editorial, con el fin de verificar su pertinencia temática,
              cumplimiento de requisitos formales y adecuación académica.
            </p>
            <p className="mb-4">
              Las obras que superen esta revisión preliminar serán enviadas a
              evaluación por pares externos, especialistas en el área
              correspondiente. La revisión será académica, independiente y
              realizada por personas expertas que no formen parte del equipo
              editorial de la revista.
            </p>
            <p className="mb-4">
              La evaluación considerará la originalidad de la obra, su rigor
              académico, coherencia interna, calidad argumentativa, uso
              adecuado de fuentes y aporte al campo de conocimiento.
            </p>
            <p>
              Con base en los dictámenes recibidos, el equipo editorial podrá:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mt-3">
              <li>Aceptar la obra.</li>
              <li>Solicitar modificaciones menores.</li>
              <li>Solicitar modificaciones sustantivas con nueva revisión.</li>
              <li>Rechazar la propuesta.</li>
            </ul>
          </div>

          {/* Acceso abierto */}
          <div>
            <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
              3. Acceso abierto, licencia y derechos de autor
            </h2>
            <p className="mb-4">
              Los libros publicados por la revista estarán disponibles en
              acceso abierto, de forma gratuita, sin requerimientos de registro
              para su lectura o descarga.
            </p>
            <p className="mb-4">
              Cada libro indicará de forma visible su licencia de uso, la fecha
              de publicación, el ISBN correspondiente y la declaración de
              derechos de autor.
            </p>
            <p>
              Las personas autoras conservan los derechos de autor de sus obras
              y autorizan a la revista para publicar, distribuir, preservar,
              difundir e indexar el libro en plataformas académicas,
              repositorios, bases de datos y directorios de acceso abierto.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
