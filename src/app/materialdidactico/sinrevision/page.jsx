"use client";

import React from "react";
import NavsComponent from "@/components/home/NavsComponent";

export default function Page() {
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
      </section>
    </div>
  );
}
