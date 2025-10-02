"use client";

import { Card } from "@material-tailwind/react";
import { FaInfinity, FaCheck } from "react-icons/fa";
import HeaderComponent from "@/components/home/HeaderComponent";
import NavsComponent from "@/components/home/NavsComponent";

export default function SobreLaRevistaPage() {
  return (
    <div>
      <HeaderComponent />
      <NavsComponent />
      <div className="container mx-auto px-6 py-6">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
              Sobre la revista
            </h1>
          </div>
          <p className="text-gray-500 text-lg mt-3 font-light text-center">
            Conoce más sobre nuestra historia, propósito y comunidad académica
          </p>
        </div>

        {/* Contenedor principal con flex */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Texto izquierda */}
          <div className="flex-1 space-y-6 text-gray-800 leading-relaxed font-alt text-justify">
            <div className="p-6 bg-gray-50 border-l-4 border-tec-red-primary rounded-lg shadow-sm">
              <p className="font-medium">
                La revista digital{" "}
                <span className="font-bold text-tec-red-primary">
                  'Matemática, Educación e Internet'
                </span>{" "}
                es una publicación semestral, gratuita y de acceso abierto,
                fundada en el año 2000 y es auspiciada por el Instituto
                Tecnológico de Costa Rica.
              </p>
            </div>

            <p>
              La revista publica artículos originales de investigación, teóricos
              y aplicados, en matemática, enseñanza de la matemática (a todos
              los niveles educativos) y temas afines. También publica ensayos y
              artículos de sección cuya presentación tenga algún valor agregado
              respecto a la literatura existente.
            </p>

            <p>
              Todos los artículos enviados a esta revista son revisados por
              pares bajo un proceso de revisión doble ciega. Esta revista
              pretende ser un punto de encuentro en el quehacer internacional en
              el campo de las matemáticas y su enseñanza y constituye un espacio
              para la reflexión y divulgación de las matemáticas y sus enseñanza
              y temas afines.
            </p>

            <p>
              Su público meta son docentes de primaria, secundaria y
              universitaria tanto como estudiantes e investigadores en
              matemática y enseñanza de la matemática.
            </p>
          </div>

          {/* Columna derecha con facts */}
          <div className="w-full lg:w-80 space-y-4">
            {/* Fundación */}
            <Card className="p-4 border border-gray-200 shadow-sm rounded-xl">
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-red-100 text-tec-red-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  Σ
                </div>
                <p className="font-bold text-gray-900 text-sm">Fundación</p>
              </div>
              <p className="text-xs text-gray-600 ml-11">Año 2000</p>
            </Card>

            {/* Acceso */}
            <Card className="p-4 border border-gray-200 shadow-sm rounded-xl">
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-red-100 text-tec-red-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  <FaInfinity className="text-sm" />
                </div>
                <p className="font-bold text-gray-900 text-sm">Acceso</p>
              </div>
              <p className="text-xs text-gray-600 ml-11">Gratuito y abierto</p>
            </Card>

            {/* Periodicidad */}
            <Card className="p-4 border border-gray-200 shadow-sm rounded-xl">
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-red-100 text-tec-red-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  π
                </div>
                <p className="font-bold text-gray-900 text-sm">Periodicidad</p>
              </div>
              <p className="text-xs text-gray-600 ml-11">Semestral</p>
            </Card>

            {/* Revisión */}
            <Card className="p-4 border border-gray-200 shadow-sm rounded-xl">
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-red-100 text-tec-red-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <FaCheck className="text-sm" />
                </div>
                <p className="font-bold text-gray-900 text-sm">Revisión</p>
              </div>
              <p className="text-xs text-gray-600 ml-11">
                Doble ciega por pares
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
