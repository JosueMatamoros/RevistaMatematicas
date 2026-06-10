import Link from "next/link";
import { FaBook, FaFlask, FaChalkboardTeacher, FaTrophy, FaArrowRight } from "react-icons/fa";
import NavsComponent from "@/components/home/NavsComponent";
import { categoryNav } from "@/data/categories";

export default function SeccionesPage() {
  return (
    <div>
      <NavsComponent />
      <div className="container mx-auto px-6 py-6">
        {/* Encabezado */}
        <div className="text-center mb-4 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Secciones
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light">
            Explora las distintas áreas temáticas de la revista
          </p>
        </div>

        <div className="flex-1 space-y-6 text-gray-800 leading-relaxed font-alt">
          <div className="p-6 bg-gray-50 border-l-4 border-tec-red-primary rounded-lg shadow-sm">
            <p className="text-justify">
              La revista digital{" "}
              <span className="font-semibold text-tec-red-primary">
                Matemática, Educación e Internet
              </span>{" "}
              reúne distintas secciones orientadas a la investigación,
              divulgación y enseñanza de la matemática. Estas abarcan temas
              de matemática pura y aplicada, didáctica, uso de tecnologías,
              geometría, algoritmos, historia de la matemática, educación
              inclusiva y divulgación matemática.
            </p>
          </div>

          {/* Secciones de la revista */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Secciones de la revista
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categoryNav.filter((cat) => cat.slug !== "olimpiadas-de-matematicas").map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/secciones/${cat.slug}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-tec-blue-primary hover:bg-tec-blue-primary/5 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-tec-blue-primary/10 flex items-center justify-center group-hover:bg-tec-blue-primary transition-colors flex-shrink-0">
                    <FaBook className="text-tec-blue-primary group-hover:text-white text-sm transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-tec-blue-primary transition-colors truncate">
                      {cat.label}
                    </p>
                    <p className="text-xs text-gray-500">{cat.count} artículos</p>
                  </div>
                  <FaArrowRight className="text-gray-300 group-hover:text-tec-blue-primary transition-colors flex-shrink-0 text-xs" />
                </Link>
              ))}
            </div>
          </div>

          {/* Materiales didácticos */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Materiales didácticos
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Además, la revista cuenta con secciones complementarias de
              recursos educativos y materiales de apoyo para la enseñanza de
              la matemática:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                href="/materialdidactico/revisado"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-tec-blue-primary hover:bg-tec-blue-primary/5 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-tec-blue-primary/10 flex items-center justify-center group-hover:bg-tec-blue-primary transition-colors flex-shrink-0">
                  <FaChalkboardTeacher className="text-tec-blue-primary group-hover:text-white text-sm transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-tec-blue-primary transition-colors">
                    Materiales revisados
                  </p>
                  <p className="text-xs text-gray-500">Con revisión editorial</p>
                </div>
                <FaArrowRight className="text-gray-300 group-hover:text-tec-blue-primary transition-colors flex-shrink-0 text-xs" />
              </Link>

              <Link
                href="/materialdidactico/sinrevision"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-tec-blue-primary hover:bg-tec-blue-primary/5 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-tec-blue-primary/10 flex items-center justify-center group-hover:bg-tec-blue-primary transition-colors flex-shrink-0">
                  <FaFlask className="text-tec-blue-primary group-hover:text-white text-sm transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-tec-blue-primary transition-colors">
                    Materiales sin revisión
                  </p>
                  <p className="text-xs text-gray-500">Recursos de aporte libre</p>
                </div>
                <FaArrowRight className="text-gray-300 group-hover:text-tec-blue-primary transition-colors flex-shrink-0 text-xs" />
              </Link>

              <Link
                href="/olimpiadas"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-tec-blue-primary hover:bg-tec-blue-primary/5 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-tec-blue-primary/10 flex items-center justify-center group-hover:bg-tec-blue-primary transition-colors flex-shrink-0">
                  <FaTrophy className="text-tec-blue-primary group-hover:text-white text-sm transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-tec-blue-primary transition-colors">
                    Olimpiadas de Matemáticas
                  </p>
                  <p className="text-xs text-gray-500">Olimpiadas Costarricenses de Matemáticas</p>
                </div>
                <FaArrowRight className="text-gray-300 group-hover:text-tec-blue-primary transition-colors flex-shrink-0 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
