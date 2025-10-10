"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import NavsComponent from "@/components/home/NavsComponent";

// Ícono dinámico con SSR desactivado (mejor rendimiento)
const TbExternalLink = dynamic(
  () => import("react-icons/tb").then((mod) => mod.TbExternalLink),
  { ssr: false }
);

export default function PoliticaEditorialPage() {
  return (
    <>
      <Head>
        {/* Solo mantenemos preconnect para recursos realmente útiles */}
        <link
          rel="preconnect"
          href="https://creativecommons.org"
          crossOrigin=""
        />
      </Head>

      <div>
        <NavsComponent />

        <div className="container mx-auto px-6 py-8">
          {/* Encabezado */}
          <div className="text-center mb-10 flex flex-col items-center">
            <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
              Políticas Editoriales
            </h1>
            <p className="text-gray-500 text-lg mt-3 font-light text-center">
              Conozca nuestras políticas editoriales, de ética y acceso abierto
              para garantizar transparencia, calidad académica y libre difusión
              del conocimiento.
            </p>
          </div>

          <div className="text-gray-800 leading-relaxed font-alt text-justify space-y-10">
            {/* Políticas Anti-plagio */}
            <section>
              <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
                Políticas Anti-plagio
              </h2>
              <p>
                La coordinación de arbitraje utiliza la herramienta de control
                de plagio (propuesta por la plataforma Tec-Digital del Instituto
                Tecnológico de Costa Rica que se basa en el paquete Turnitin
                para sus búsquedas) al recibir inicialmente la propuesta a
                evaluar. En caso de obtener más de un 25% de similitud, se
                comunica con el o los autores para que se aclare dicha
                coincidencia; en caso de persistir, se rechaza de inmediato la
                propuesta.
              </p>
              <p className="mt-3">
                Además, se les sugiere a los evaluadores el uso de sitios para
                detección de plagio como{" "}
                <a
                  href="http://plagiarisma.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tec-blue-secondary hover:underline inline-flex items-center gap-1"
                >
                  plagiarisma.net <span aria-hidden="true">↗</span>
                </a>{" "}
                o{" "}
                <a
                  href="http://www.dustball.com/cs/plagiarism.checker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tec-blue-secondary hover:underline inline-flex items-center gap-1"
                >
                  dustball.com <span aria-hidden="true">↗</span>
                </a>{" "}
                durante el proceso de revisión.
              </p>
            </section>

            {/* Preservación Digital */}
            <section>
              <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
                Preservación Digital
              </h2>
              <p>
                Se preservan los pdf y otros en el Departamento de
                Administración de Tecnologías de Información y Comunicaciones
                (Datic) del Instituto Tecnológico de Costa Rica, el cual brinda
                respaldos a toda la red de servidores virtuales que aloja la
                universidad.
              </p>
            </section>

            {/* Código de Ética */}
            <section>
              <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
                Código de Ética
              </h2>
              <p>
                Los editores, revisores y autores que están involucrados en el
                proceso de publicación de documentos en la Revista Digital,
                Matemática, Educación e Internet deben seguir criterios de
                cumplimiento ético. En resumen, los primeros (editores y
                revisores) se comprometen a mantener la confidencialidad y
                objetividad durante el proceso de revisión, entre tanto, los
                autores deben ser honestos en sus publicaciones y referenciar
                aquellas opiniones que no sean de su autoría.
              </p>
              <p className="mt-3">
                Las políticas éticas para la publicación son:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mt-3">
                <li>
                  <strong>Para los editores:</strong> El comité editorial velará
                  por la creación y actualización de políticas editoriales y
                  comité científico acordes a las exigencias a nivel nacional e
                  internacional. Además, divulgará la revista y someterá a
                  procesos de indexación que permitan un proceso continuo de
                  evaluación.
                </li>
                <li>
                  <strong>Para los revisores:</strong> Deberán ser puntuales en
                  el tiempo asignado para la evaluación y objetivos. Informar
                  inmediatamente si hay intento de plagio o conflicto de
                  intereses.
                </li>
                <li>
                  <strong>Para los autores:</strong> Deberán ajustarse a los
                  lineamientos de presentación de trabajos que exige la revista.
                  Evitar conductas como plagio, autoplagio, manipulación de
                  datos o conflicto de intereses.
                </li>
                <li>
                  <strong>Penalizaciones:</strong> El comité editorial procede
                  al rechazo inmediato si se detecta alguna modalidad de
                  conducta inapropiada. Se reserva el derecho de sometimiento a
                  revisión de artículos de autores reincidentes.
                </li>
              </ul>
            </section>

            {/* Acceso Abierto y Reuso */}
            <section>
              <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
                Políticas de Acceso Abierto y Reuso
              </h2>
              <p>
                La Revista digital Matemática, Educación e Internet ofrece
                acceso abierto a todo su contenido bajo el principio de que al
                hacer la investigación libremente disponible para el público, se
                favorece un mayor intercambio global de conocimientos.
              </p>
              <p className="mt-3">
                En ningún momento se realizan cobros o cargos económicos a las
                personas autoras para que su trabajo sea evaluado o publicado,
                tampoco se aplica ningún costo por el proceso de maquetación y
                edición final del artículo.
              </p>
              <p className="mt-3">
                De igual forma, todos los artículos de la revista están
                disponibles de forma gratuita inmediatamente después de su
                publicación, y los lectores pueden leer, descargar, copiar,
                distribuir, imprimir, buscar o enlazar los textos de forma
                parcial o total, y usarlos para cualquier otro propósito legal,
                de acuerdo con la licencia de{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tec-blue-secondary hover:underline inline-flex items-center gap-1"
                >
                  Creative Commons CC BY-NC-ND 4.0 <span aria-hidden="true">↗</span>
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
