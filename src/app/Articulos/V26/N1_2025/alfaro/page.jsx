// src/app/Articulos/V26/N1_2025/Alfaro/page.jsx
import { withBasePath, withFullUrl } from "@/lib/basePath";

// -------- METADATA (SSR/SSG: visible para Google Scholar) --------
export async function generateMetadata() {
  const pdfRel =
    "/Articulos/V26/N1_2025/Alfaro/RevistaDigital_V26_n1_2025_Alfaro.pdf";

  return {
    title:
      "Errores y dificultades frecuentes al aplicar las técnicas de conteo",
    description:
      "Este artículo analiza los errores más frecuentes al aplicar técnicas de conteo...",
    other: {
      // Scholar (Highwire Press) tags:
      citation_title:
        "Errores y dificultades frecuentes al aplicar las técnicas de conteo",
      // Repite 'citation_author' por cada autor
      citation_author: "Alejandra Alfaro-Barquero",
      citation_author_1: "Sonia Chinchilla-Brenes",
      citation_publication_date: "2025/01/01",
      citation_journal_title: "Revista Digital Matemática",
      citation_volume: "26",
      citation_issue: "1",
      citation_language: "es",
      // URL ABSOLUTA al PDF
      citation_pdf_url: withFullUrl(pdfRel),
    },
  };
}

// -------- PAGE (Server Component) --------
export default function Page() {
  // Datos del artículo (ejemplo; cámbialos según el caso)
  const pdfRel =
    "/Articulos/V26/N1_2025/Alfaro/RevistaDigital_V26_n1_2025_Alfaro.pdf";
  const pdfAbs = withFullUrl(pdfRel);
  const doiUrl = "https://doi.org/10.18845/rdmei.v26i1.7876";

  const authors = [
    {
      name: "Manuel Vicente Centeno-Romero",
      email: "manuelcenteno11@gmail.com",
      university: "Universidad de Oriente, Núcleo de Sucre",
      department: "Escuela de Ciencias, Departamento de Matemáticas",
      location: "Sucre, Venezuela",
      orcid: "https://orcid.org/0000-0000-0000-0000",
    },
    {
      name: "Marvelis González Rodríguez",
      email: "barbaravaleria2@gmail.com",
      university: "Universidad de Oriente, Núcleo de Anzoátegui",
      department: "Unidad de Estudios Básicos, Departamento de Ciencias",
      location: "Anzoátegui, Venezuela",
      orcid: "https://orcid.org/0000-0000-0000-0001",
    },
  ];

  const keywordsEs = [
    "Errores",
    "dificultades",
    "cooperativismo",
    "estrategias de aprendizaje",
  ];
  const keywordsEn = [
    "Errors",
    "difficulties",
    "cooperativism",
    "learning strategies",
  ];

  const citationText =
    "Centeno Romero, M. V., & González Rodríguez, M. (2025). Errores y dificultades frecuentes al aplicar las técnicas de conteo. Revista Digital: Matemática, Educación e Internet, 26(1). https://doi.org/10.18845/rdmei.v26i1.7876";

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Título */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Errores y dificultades frecuentes al aplicar las técnicas de conteo
          </h1>
          <p className="text-lg text-gray-500 font-light">
            Frequent errors and difficulties in applying counting techniques
          </p>
        </div>

        {/* 1) Autores (contenido centrado) */}
        <div className="mb-4 grid gap-3 md:grid-cols-2">
          {authors.map((a, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-bold text-base text-gray-900">{a.name}</h3>

              {a.orcid && (
                <a
                  href={a.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-green-600 hover:text-green-700 text-sm font-medium"
                  aria-label="ORCID"
                  title="ORCID"
                >
                  ORCID
                </a>
              )}

              {a.email && (
                <p className="mt-2 text-tec-blue-secondary text-sm font-medium">
                  {a.email}
                </p>
              )}

              <div className="mt-2 text-sm text-gray-600 space-y-0.5">
                {a.university && <p className="font-medium">{a.university}</p>}
                {a.department && <p>{a.department}</p>}
                {a.location && <p className="text-gray-500">{a.location}</p>}
              </div>
            </div>
          ))}
        </div>

         {/* 4) Fechas + barra de acciones */}
        <div className="text-sm text-gray-600 mt-5 mb-3">
          <span className="font-semibold text-gray-800">Recibido:</span> 26 de
          febrero de 2024{" "}
          <span className="mx-2 text-gray-400" aria-hidden>
            |
          </span>
          <span className="font-semibold text-gray-800">Aceptado:</span> 1 de
          marzo de 2025
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5 p-4 bg-gray-50 rounded-lg border">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800 text-sm">DOI:</span>
            <a
              href={doiUrl}
              className="text-tec-blue-secondary hover:text-tec-blue-primary text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {doiUrl}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Descargar: outline rojo */}
            <a
              href={pdfAbs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm font-medium"
            >
              Descargar
            </a>

            {/* Compartir: outline azul */}
            <a
              href={pdfAbs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md border border-tec-blue-secondary text-tec-blue-secondary hover:bg-blue-50 text-sm font-medium"
            >
              Compartir
            </a>
          </div>
        </div>

        {/* 2) Resumen (sin bg de carta; mantiene borde e identidad de chips) */}
        <section className="rounded-lg p-4 border-l-4 border-tec-blue-secondary">
          <h2 className="text-lg font-bold text-tec-blue-primary mb-3">
            Resumen
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify text-sm">
            Los errores y dificultades frecuentes que presentan los estudiantes
            de Estadística I en la UDO Anzoátegui, al aplicar técnicas de
            conteo, se encuentran, en su mayoría, al resolver problemas de
            combinación y permutación...
          </p>

          <div className="mt-3">
            <h3 className="text-sm font-bold text-tec-blue-primary mb-2">
              Palabras clave
            </h3>
            <div className="flex flex-wrap gap-2">
              {keywordsEs.map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-tec-blue-primary border border-blue-200 text-sm"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3) Abstract (mismos cambios que Resumen) */}
        <section className="rounded-lg p-4 border-l-4 border-tec-red-primary mt-5">
          <h2 className="text-lg font-bold text-red-800 mb-3">Abstract</h2>
          <p className="text-gray-800 leading-relaxed text-justify text-sm">
            The frequent errors and difficulties presented by Statistics I
            students at UDO Anzoátegui, when applying counting techniques, are
            found, for the most part, when solving combination and permutation
            problems...
          </p>

          <div className="mt-3">
            <h3 className="text-sm font-bold text-red-800 mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywordsEn.map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-200 text-sm"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5) Cómo citar (agregar botón "Copiar" sin onClick) */}
        <section className="bg-gray-50 rounded-lg p-3 border mt-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold text-gray-900">Cómo citar</h2>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-tec-blue-secondary text-tec-blue-secondary hover:bg-blue-50 text-sm font-medium"
              aria-label="Copiar cita"
              title="Copiar cita"
            >
              Copiar
            </button>
          </div>

          <div className="bg-white rounded-md p-3 border border-gray-200">
            <p className="text-gray-800 text-sm leading-relaxed">
              Centeno Romero, M. V., &amp; González Rodríguez, M. (2025).
              Errores y dificultades frecuentes al aplicar las técnicas de
              conteo.{" "}
              <em className="text-gray-700">
                Revista Digital: Matemática, Educación e Internet
              </em>
              , <strong>26</strong>(1).{" "}
              <a
                href={doiUrl}
                className="text-tec-blue-secondary hover:text-tec-blue-primary underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {doiUrl}
              </a>
            </p>
          </div>
        </section>

        {/* 6) PDF (iframe con ruta RELATIVA respetando basePath) */}
        <section className="mt-6">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe
              src={withBasePath(pdfRel)}
              className="w-full h-[700px] lg:h-[900px]"
              title="Artículo completo - Errores y dificultades frecuentes al aplicar las técnicas de conteo"
            />
          </div>

          {/* “Descargar PDF” complementario */}
          <div className="mt-3">
            <a
              href={pdfAbs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm font-medium"
            >
              Descargar PDF
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
