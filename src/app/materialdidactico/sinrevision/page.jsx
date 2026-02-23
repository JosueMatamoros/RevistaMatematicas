"use client";

import React from "react";
import NavsComponent from "@/components/home/NavsComponent";
import ArticlesList from "@/components/articles/ArticlesList";
import CourseCard from "@/components/onlineCourses/CourseCard";
import sinRevisionData from "@/data/materialdidactico/sinrevision.json";

export default function Page() {
  const articleSections = sinRevisionData.articulos?.sections || [];

  return (
    <div>
      <NavsComponent />

      <section className="py-8 px-4 max-w-6xl mx-auto">
        {/* Título principal estilo instrucciones */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary mb-4">
            Materiales Didácticos sin Revisión
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-3xl mx-auto">
            Esta sección contiene material didáctico elaborado y/o recopilado por profesores de la
            escuela de matemática del Instituto Tecnológico de Costa Rica. En estos materiales
            algunas veces participan estudiantes. Este material no ha sido sometido a un consejo
            editorial.
          </p>
        </div>

        {/* Listado de artículos sin revisión por secciones */}
        {articleSections.length > 0 && articleSections.some(s => s.articles?.length > 0) && (
          <ArticlesList
            sections={articleSections}
            basePath="/materialdidactico/sinrevision"
            noPadding
            useBasePath={true}
          />
        )}

        {/* Mostrar aquí los cursos en línea */}
        <div >
          <h4 className="font-display mb-6 font-bold border-b-2 border-tec-red-primary w-fit text-2xl">
            Cursos en línea
          </h4>
          <CourseCard
            title="Ecuaciones Diferenciales"
            title_en="Differential Equations"
            authors="M.Sc. Geovanni Figueroa M."
            link="/cursosLinea/EcuacionesDiferenciales/index.htm"
          />
        </div>
      </section>
    </div>
  );
}
