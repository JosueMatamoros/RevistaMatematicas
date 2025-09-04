export async function generateMetadata() {
  return {
    title:
      "Errores y dificultades frecuentes al aplicar las técnicas de conteo",
    description:
      "Este artículo analiza los errores más frecuentes al aplicar técnicas de conteo...",
    other: {
      citation_title:
        "Errores y dificultades frecuentes al aplicar las técnicas de conteo",
      citation_author: "Alejandra Alfaro-Barquero",
      citation_author_1: "Sonia Chinchilla-Brenes",
      citation_publication_date: "2025/01/01",
      citation_journal_title: "Revista Digital Matemática",
      citation_volume: "26",
      citation_issue: "1",
      citation_pdf_url:
        "https://tecdigital.tec.ac.cr/servicios/revistamatematica/Articulos/V26/N1_2025/Alfaro/RevistaDigital_V26_n1_2025_Alfaro.pdf",
    },
  };
}

export default function Page() {
  return (
    <article className="prose mx-auto py-10">
      <h1>
        Errores y dificultades frecuentes al aplicar las técnicas de conteo
      </h1>
      <p>
        <strong>Autores:</strong> Alejandra Alfaro-Barquero, Sonia
        Chinchilla-Brenes
      </p>
      <p>
        <strong>Publicado en:</strong> Revista Digital Matemática, Vol. 26, Núm.
        1, 2025
      </p>

      <section className="mt-6">
        <iframe
          src="/Articulos/V26/N1_2025/Alfaro/RevistaDigital_V26_n1_2025_Alfaro.pdf"
          width="100%"
          height="600px"
          style={{ border: "1px solid #ddd" }}
        >
          Tu navegador no soporta vista embebida de PDF.
        </iframe>
        <p>
          <a
            href="/Articulos/V26/N1_2025/Alfaro/RevistaDigital_V26_n1_2025_Alfaro.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </a>
        </p>
      </section>
    </article>
  );
}
