import NavsComponent from "@/components/home/NavsComponent";
import PersonCard from "@/components/common/PersonCard";
import {
  consejoEditor,
  comiteEditorial,
  comiteCientifico,
} from "@/data/equipoData";

export default function EquipoEditorialPage() {
  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-8">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Cuerpo editorial
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center">
            Conoce al equipo editor, comité editorial y comité científico de la
            revista{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>
          </p>
        </div>

        <Section title="Consejo Editor" data={consejoEditor} />
        <Section title="Comité Editorial" data={comiteEditorial} />
        <Section title="Comité Científico" data={comiteCientifico} />
      </div>
    </div>
  );
}

/**
 * Componente reutilizable para las secciones de personas
 */
function Section({ title, data }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {data.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </div>
    </>
  );
}
