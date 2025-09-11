// src/app/Articulos/V26/N1_2025/Alfaro/page.jsx
import { withBasePath, withFullUrl } from "@/lib/basePath";
import HeaderComponent from "@/components/home/HeaderComponent";
import BreadcrumbNav from "@/components/articles/BreadcrumbNav";
import { FaFilePdf, FaShareAlt, FaCopy } from "react-icons/fa";


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
      orcid: "https://orcid.org/0009-0006-0139-7689",
    },
    {
      name: "Marvelis González Rodríguez",
      email: "barbaravaleria2@gmail.com",
      university: "Universidad de Oriente, Núcleo de Anzoátegui",
      department: "Unidad de Estudios Básicos, Departamento de Ciencias",
      location: "Anzoátegui, Venezuela",
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
      <HeaderComponent />
      <div className="mt-2 mb-2">
        <BreadcrumbNav />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Errores y dificultades frecuentes al aplicar las técnicas de conteo
          </h1>
          <p className="text-lg text-gray-500 font-light">
            Frequent errors and difficulties in applying counting techniques
          </p>
        </div>

        {/* Autores dinámicos */}
        <div className="mb-6 flex flex-wrap gap-4 justify-center">
          {authors.map((a, i) => (
            <div
              key={i}
              className="flex-1 min-w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-center"
            >
              {/* Nombre + ORCID */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="font-bold text-base text-gray-900">{a.name}</h3>
                {a.orcid && (
                  <a
                    href={a.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ORCID"
                    title="ORCID"
                  >
                    <img
                      src="/logoORCID.png"
                      alt="ORCID"
                      className="w-5 h-5 inline-block"
                    />
                  </a>
                )}
              </div>

              {/* Email */}
              {a.email && (
                <p className="text-tec-blue-secondary text-sm font-medium mb-2">
                  {a.email}
                </p>
              )}

              {/* Universidad, Departamento, Ubicación */}
              <div className="text-sm text-gray-600 space-y-0.5">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm "
            >
              Descargar
              <FaFilePdf className="text-red-600 w-4 h-4" />
            </a>

            {/* Compartir: outline azul */}
            <a
              href={pdfAbs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-blue-secondary text-tec-blue-secondary hover:bg-blue-50 text-sm font-medium"
            >
              Compartir
              <FaShareAlt className="text-blue-600 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Resumen (ES) → Azul */}
        <section className="rounded-lg p-4 mt-5 border-l-4 border-l-tec-blue-secondary">
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

        {/* Abstract (EN) → Blanco / Gris claro */}
        <section className="rounded-lg p-4   border-l-4 border-l-tec-red-primary mt-5">
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

        {/* Resumo (PT) → Rojo */}
        <section className="rounded-lg p-4 border-l-4 border-l-gray-400 mt-5">
          <h2 className="text-lg font-bold text-gray-700 mb-3">Resumo</h2>
          <p className="text-gray-800 leading-relaxed text-justify text-sm">
            Neste projeto buscou-se avaliar o modelo teórico RIASEC de Holland,
            sua aplicabilidade na classificação de cursos STEM no Instituto
            Tecnológico da Costa Rica, assim como analisar diferenças nas
            pontuações das escalas de atividades e habilidades do
            Self-Directed-Search (versão em espanhol) segundo o sexo e nível de
            satisfação profissional, em uma amostra de 581 estudantes de 18
            cursos, com idade média de 20,29 anos (DP = 3,33), 40,62% mulheres e
            59,38% homens. Por meio de modelos de fatores confirmatórios,
            evidenciou-se a presença das 6 tipologias da teoria RIASEC.
            Referente à classificação de cursos segundo os códigos da tríade do
            explorador de cursos e ocupações de Holland et al. (2005c), foi
            obtida uma correspondência total (3 siglas) apenas para 33,33% da
            amostra de cursos; uma correspondência parcial (2 siglas) para
            44,44% das corridas e, finalmente, 22,22% apresentaram uma
            correspondência mínima (1 sigla). A análise de variância mostrou que
            aqueles que apresentaram maiores níveis de satisfação profissional
            obtiveram médias mais altas nas escalas de habilidades realistas,
            empreendedoras e sociais, mas não foram evidenciadas diferenças
            significativas entre as pontuações nas escalas de habilidades. Em
            relação ao sexo, as mulheres apresentam médias mais altas nas
            tipologias artística e social, enquanto os homens se destacam nas
            tipologias realista e investigativa.
          </p>
          <div className="mt-3">
            <h3 className="text-sm font-bold text-gray-700 mb-2">
              Palavras-chave
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "interesse",
                "habilidade",
                "orientação profissional",
                "ensino superior",
                "teoria RIASEC",
              ].map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center px-3 py-1 rounded-full  bg-gray-100 text-gray-700 border border-gray-300 text-sm"
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md  hover:bg-gray-300 text-sm font-medium transition-all hover:scale-105"
              aria-label="Copiar cita"
              title="Copiar cita"
            >
              <FaCopy className="w-4 h-4 text-gray-800" />
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
        </section>
      </div>
    </article>
  );
}
