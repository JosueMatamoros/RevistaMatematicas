"use client";

import NavsComponent from "@/components/home/NavsComponent";
import { withBasePath } from "@/lib/basePath";
import { TbExternalLink } from "react-icons/tb";

export default function DeclaracionOriginalidadPage() {
  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-8">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
           Declaración de originalidad
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center">
             Al entregar su artículo a la revista el autor declara que
          </p>
        </div>
        {/* Lista de condiciones */}
        <ul className="list-disc list-outside pl-6 space-y-4 text-gray-700">
          <li>
            El artículo presentado a la revista es un artículo original, no ha
            sido publicado anteriormente y los datos presentados en él son datos
            reales.
          </li>
          <li>
            El artículo no será entregado a ninguna otra revista mientras dure
            en el proceso de revisión y, de ser aceptado en la revista, los
            derechos comerciales sobre el artículo pasan a ser de la revista y
            el artículo no puede ser presentado ni publicado en ninguna otra
            revista, libro o publicación escrita o digital a menos que se pidan
            los permisos formales a la revista.
          </li>
          <li>
            El artículo no es una versión “revisada” de otro artículo que ya ha
            sido publicado. Por supuesto que nuevos artículos se pueden basar en
            datos de un artículo anterior del mismo autor, sin embargo, la
            revista sólo publica trabajos que sean completamente nuevos y
            originales, es decir, el artículo no debe tener las mismas frases,
            el mismo formato o ser una traducción de otro artículo.
          </li>
          <li>
            El artículo no utiliza imágenes con derechos de copiado (por ejemplo
            una captura de pantalla de un sitio web de una compañía o de un
            video de una película, tablas, imágenes, figuras, etc) y, de ser
            utilizadas, los autores son los responsables de obtener el permiso
            correspondiente de publicación por escrito y de indicar en el nombre
            de la figura el derecho de copiado, por ejemplo:
            <br />
            <br />
            <em>
              Figura 1. [Título de la figura]. (©[Año del derecho de copiado],
              Tomado de [Fuente de donde se tomó la imagen]. Usado con permiso).
            </em>
            <br />
            <br />
            Se debe tener cuidado ya que si una figura fue adaptada de otra con
            derechos de copiado también se deben investigar si se debe solicitar
            el permiso y se debe poner también en el título de la figura:
            <br />
            <br />
            <em>
              Figura 1. [Título de la figura]. (Adaptado de [Fuente de donde se
              tomó la imagen]).
            </em>
            <br />
            <br />
            Además, si se indica alguna marca registrada en el artículo se debe
            acreditar a su dueño y utilizar el símbolo ® o solicitar los
            permisos correspondientes para utilizarla.
          </li>
        </ul>

        {/* Enlace al PDF */}
        <p className="mt-6 text-gray-700">
          Una vez aceptado el artículo, los autores deben completar la
          declaración jurada disponible en este{" "}
          <a
            href={withBasePath("/docs/Permiso_publicacion.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tec-blue-secondary hover:underline inline-flex items-center gap-1"
          >
            enlace <TbExternalLink className="text-xs" />
          </a>
          .
        </p>
      </div>
    </div>
  );
}
