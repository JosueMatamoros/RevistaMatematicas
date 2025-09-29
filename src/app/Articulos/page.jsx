"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { LuCalendar, LuBookOpen } from "react-icons/lu";
import HeaderComponent from "@/components/home/HeaderComponent";
import { issues } from "@/data/issues";

export default function ArticulosIndexPage() {
  const router = useRouter();

  return (
    <div>
      <HeaderComponent />

      <div className="container mx-auto px-4 py-8">
        {/* Título principal */}
        <Typography
          variant="h2"
          className="mb-6 font-extrabold text-4xl text-center bg-gradient-to-r from-tec-blue-secondary to-blue-400 bg-clip-text text-transparent"
        >
          Todos los números
        </Typography>

        <Typography
          variant="paragraph"
          color="gray"
          className="text-center mb-8"
        >
          En esta página encontrará los números anteriores de la revista digital{" "}
          <span className="font-semibold text-tec-blue-secondary">
            Matemática, Educación e Internet
          </span>
          . Desde el año 2000 se han publicado artículos y contribuciones de
          destacados investigadores y expertos en la materia.
        </Typography>

        {/* Grid de números */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue, index) => {
            // Forzar el chip en el 1º y 2º elemento
            let chipLabel = "";
            if (index === 0) chipLabel = "Actual";
            if (index === 1) chipLabel = "Reciente";

            return (
              <Card
                key={issue.id}
                className={
                  "border-l-4 border-tec-blue-secondary hover:border-red-500 transition-colors duration-200 group"
                }
              >
                <CardBody>
                  {/* Título del número */}
                  <div className="flex justify-between items-center mb-4 ">
                    <Typography
                      variant="h4"
                      className="font-bold text-tec-blue-secondary group-hover:text-red-500 transition-colors duration-200"
                    >
                      Volumen {issue.volume}, Número {issue.number}
                    </Typography>
                    {/* Chip de estado */}
                    {chipLabel && (
                      <Chip
                        value={chipLabel}
                        size="sm"
                        className={`ml-3 inline-flex ${
                          chipLabel === "Actual"
                            ? "border-red-300 text-red-700 bg-red-50"
                            : "border-blue-300 text-blue-700 bg-blue-50"
                        }`}
                      />
                    )}
                  </div>

                  {/* Fecha con ícono */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <LuCalendar className="text-gray-500" />
                    <Typography color="gray">{issue.date}</Typography>
                  </div>

                  {/* Botón Ver artículos con ícono */}
                  <Button
                    className="normal-case flex items-center gap-2 px-5 py-2 rounded-md 
                    bg-gray-100 text-gray-800 font-medium shadow-sm
                    hover:bg-gray-200 hover:shadow-md
                    transition-all duration-200 border border-gray-300 hover:scale-105"
                    onClick={() =>
                      router.push(`/Articulos/V${issue.volume}/${issue.id}`)
                    }
                  >
                    <LuBookOpen className="w-4 h-4" />
                    Ver artículos
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
