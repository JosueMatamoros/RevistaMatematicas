"use client";

import HeaderComponent from "@/components/home/HeaderComponent";
import NavsComponent from "@/components/home/NavsComponent";
import { Card } from "@material-tailwind/react";
import { TbExternalLink } from "react-icons/tb";
import { SiLatex } from "react-icons/si";
import { GoFileZip } from "react-icons/go";
import { FaRegFileWord } from "react-icons/fa";
import { withBasePath } from "@/lib/basePath";

export default function InstruccionesPage() {
  return (
    <div>
      <HeaderComponent />
      <NavsComponent />

      <div className="container mx-auto px-6 py-8">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Instrucciones para publicar
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center">
            En el presente documento se detalla la información necesaria para
            que los autores puedan enviar un artículo a la Revista Digital{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>{" "}
            para su arbitraje y eventual publicación. También se detallan los
            derechos de copiado y el proceso de evaluación de los artículos.
          </p>
        </div>

        {/* Contenido principal */}
        <div className=" text-gray-800 leading-relaxed font-alt text-justify ">
          {/* Introducción */}
          <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
            1. Introducción
          </h2>
          <p>
            El comité editorial le agradece su interés por publicar su trabajo
            en la Revista digital{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>{" "}
            (en adelante <span className="italic">&quot;la revista&quot;</span>). Las
            publicaciones de la revista tratan sobre temas de matemática de
            nivel universitario y secundaria, el uso de tecnologías y sobre
            didáctica y enseñanza de las matemáticas.
          </p>

          {/* Lista de tópicos */}
          <p className="mt-4 mb-2">
            La siguiente es una lista no exhaustiva de algunos tópicos:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>
              Aportes de investigación sobre la matemática y su enseñanza en
              secundaria y a nivel universitario
            </li>
            <li>Matemáticas universitarias</li>
            <li>Software didáctico</li>
            <li>
              Métodos numéricos y algoritmos en teoría de números, matemática
              discreta y álgebra
            </li>
            <li>Matemática aplicada</li>
            <li>Historia</li>
            <li>Didáctica de la Probabilidad y la Estadística</li>
          </ul>

          {/* Comité - Cards */}
          <p className="mt-4 mb-2">
            Las propuestas se pueden enviar a cualquiera de los miembros del
            comité director:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Nuria */}
            <Card className="p-4 border-l-4 border-x-tec-blue-secondary rounded-xl shadow-lg text-center hover:scale-[1.02] transition-transform">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Nuria Vanessa Figueroa Flores
              </h3>
              <a
                href="mailto:nfigueroa@itcr.ac.cr"
                className="flex justify-center items-center gap-1 text-sm text-tec-blue-secondary hover:underline"
              >
                nfigueroa@itcr.ac.cr
                <TbExternalLink className="text-tec-blue-secondary text-xs" />
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Encargada de la dirección de la revista
              </p>
            </Card>

            {/* Greivin */}
            <Card className="p-4 border-l-4 border-x-tec-blue-secondary rounded-xl shadow-xl text-center hover:scale-[1.02] transition-transform">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Greivin Ramírez Arce (Editor)
              </h3>
              <a
                href="mailto:gramirez@itcr.ac.cr"
                className="flex justify-center items-center gap-1 text-sm text-tec-blue-secondary hover:underline"
              >
                gramirez@itcr.ac.cr
                <TbExternalLink className="text-tec-blue-secondary text-xs" />
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Encargado del arbitraje de la revista
              </p>
            </Card>

            {/* Rebeca */}
            <Card className="p-4 border-l-4 border-x-tec-blue-secondary rounded-xl shadow-xl text-center hover:scale-[1.02] transition-transform">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Rebeca Solís Ortega
              </h3>
              <a
                href="mailto:rsolis@itcr.ac.cr"
                className="flex justify-center items-center gap-1 text-sm text-tec-blue-secondary hover:underline"
              >
                rsolis@itcr.ac.cr
                <TbExternalLink className="text-tec-blue-secondary text-xs" />
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Encargada de la edición y mantenimiento del sitio web
              </p>
            </Card>
          </div>
        </div>

        {/* Formato del documento */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
            2. Formato del documento
          </h2>

          <p>
            El artículo debe ser presentado preferiblemente en LaTeX, se deben
            entregar los archivos <code>.tex</code>, <code>.pdf</code> y{" "}
            <code>.bib</code> (cuando se haya creado la bibliografía usando
            BibTEX). Además, de todas las imágenes utilizadas en el artículo,
            para las imágenes se debe utilizar el formato <code>.pdf</code>,{" "}
            <code>.eps</code> o <code>.png</code> (si son imágenes de buena
            calidad). Puede usar la plantilla oficial de la revista, la cual se
            encuentra disponible en dos formatos:
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="https://www.overleaf.com/latex/templates/revdigmateduintmachotearticulo/kwywktpysvvs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-blue-secondary text-tec-blue-secondary hover:bg-blue-50 text-sm"
            >
              Plantilla LaTeX en Overleaf
              <SiLatex className="text-tec-blue-secondary text-lg" />
            </a>
            <a
              href={withBasePath("/plantillas/Plantilla_LaTeX.zip")}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm"
            >
              Plantilla LaTeX descargable
              <GoFileZip className="text-tec-red-primary text-lg" />
            </a>
          </div>

          <p className="mt-6">
            También se reciben trabajos realizados con OpenOffice, Libreoffice o
            Microsoft Word, utilizando el editor de fórmulas (o MathType) para
            todas las expresiones matemáticas. Puede usar la siguiente
            plantilla:
          </p>

          <div className="mt-2">
            <a
              href={withBasePath("/plantillas/Plantilla_Office.docx")}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-800 text-gray-800 hover:bg-gray-100 text-sm"
            >
              Plantilla en Office
              <FaRegFileWord className="text-gray-800 text-lg" />
            </a>
          </div>

          <p className="mt-8">
            Por ser una revista digital, la longitud del documento puede ser
            variable; sin embargo, los artículos tienen una extensión de entre
            10 y 20 páginas; aún así, artículos de mayor longitud pueden ser
            aceptados luego que ambos comités (científico y editorial) den el
            visto bueno.
          </p>

          <p className="mt-6 mb-2 font-semibold">
            Todo trabajo debe contener como estructura mínima:
          </p>

          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Título:</strong> El título debe ser representativo del
              trabajo y debe tener entre 10 y 20 palabras.
            </li>
            <li>
              <strong>Título en inglés:</strong> El mismo título traducido al
              idioma inglés.
            </li>
            <li>
              <strong>Autor(es):</strong> Debe aparecer el nombre completo del
              autor o los autores sin nombramiento o grado académico, se debe
              agregar además la institución en la que trabaja, el correo
              electrónico y su número de orcid.
            </li>
            <li>
              <strong>Resumen:</strong> Un breve resumen del trabajo, este
              resumen debe contener entre 100 y 120 palabras.
            </li>
            <li>
              <strong>Abstract:</strong> Traducción del resumen al inglés.
            </li>
            <li>
              <strong>Palabras clave:</strong> Se deben poner al menos tres
              palabras clave que identifiquen su trabajo, estas palabras ayudan
              a los buscadores a encontrar su artículo cuando se hace una
              búsqueda en Internet. Estas se pueden tomar de la lista que se
              provee en la página web de la revista en la dirección{" "}
              <a
                href="https://tecdigital.tec.ac.cr/servicios/revistamatematica/paginasgenerales/palabras_claves.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-tec-blue-secondary hover:underline"
              >
                Palabras clave <TbExternalLink className="text-xs" />
              </a>
              . También pueden agregarse palabras nuevas.
            </li>
            <li>
              <strong>Keywords:</strong> Traducción de las palabras clave al
              inglés.
            </li>
            <li>
              <strong>Introducción:</strong> Una introducción del artículo.
            </li>
            <li>
              <strong>Secciones:</strong> Es estas secciones se desarrollará el
              trabajo y dependen de cada artículo, en artículos de estudios
              científicos por lo general tiene como secciones: Justificación
              (aunque a veces esta se funde en la introducción), Marco Teórico,
              Metodología, Análisis de los datos.
            </li>
            <li>
              <strong>Conclusiones:</strong> Donde se muestran las principales
              conclusiones del trabajo.
            </li>
            <li>
              <strong>Bibliografía:</strong> Aquí se deben poner la información
              bibliográfica de todos los trabajos que hayan sido citados en el
              artículo y sólo estos (es decir, no se deben poner en la
              bibliografía trabajos que no hayan sido citados dentro del
              artículo). La bibliografía debe estar ordenada por orden
              alfabético y se debe escribir conforme al documento. Para la
              realización de la bibliografía se debe utilizar{" "}
              <strong>formato APA</strong> (Recomendación:{" "}
              <a
                href="https://www.mendeley.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-tec-blue-secondary hover:underline"
              >
                Mendeley <TbExternalLink className="text-xs" />
              </a>
              ).
            </li>
          </ul>

          <p className="mt-6">
            Si desea descargar las instrucciones para publicar y obtener mayor
            detalle, diríjase a este{" "}
            <a
              href={withBasePath("/docs/Instrucciones_publicar.pdf")}
              download
              className="inline-flex items-center gap-1 text-tec-blue-secondary font-medium hover:underline"
            >
              enlace <TbExternalLink className="text-xs" />
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
