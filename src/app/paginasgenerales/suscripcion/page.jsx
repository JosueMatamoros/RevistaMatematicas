"use client";

import NavsComponent from "@/components/home/NavsComponent";
import { withFullUrl } from "@/lib/basePath";
import { FaUser, FaUniversity, FaEnvelope, FaCommentAlt, FaPaperPlane } from "react-icons/fa";

export default function SuscripcionPage() {
  const redirectUrl = withFullUrl("/paginasgenerales/respuesta/");

  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">

          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Suscribirse a la revista
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center max-w-md">
            Recibe notificaciones sobre nuevas publicaciones de{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>
          </p>
        </div>

        {/* Tarjeta del formulario */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Barra de acento superior */}
          <div className="h-1.5 bg-tec-red-primary w-full" />

          <form
            action="https://formsubmit.co/1002matamoros@gmail.com"
            method="POST"
            className="p-8 space-y-6"
          >
            {/* Campos ocultos de FormSubmit */}
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="hidden" name="_captcha" value="false" />

            {/* Nombre Completo */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nombreCompleto"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <FaUser className="text-tec-red-primary text-xs" />
                Nombre completo <span className="text-tec-red-primary">*</span>
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                required
                placeholder="Ingrese su nombre completo"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-tec-blue-primary focus:bg-white focus:border-transparent transition"
              />
            </div>

            {/* Institución */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="institucionNombre"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <FaUniversity className="text-tec-red-primary text-xs" />
                Institución <span className="text-tec-red-primary">*</span>
              </label>
              <input
                type="text"
                id="institucionNombre"
                name="institucionNombre"
                required
                placeholder="Nombre de su institución"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-tec-blue-primary focus:bg-white focus:border-transparent transition"
              />
            </div>

            {/* Correo electrónico */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="Ecorreo"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <FaEnvelope className="text-tec-red-primary text-xs" />
                Correo electrónico <span className="text-tec-red-primary">*</span>
              </label>
              <input
                type="email"
                id="Ecorreo"
                name="Ecorreo"
                required
                placeholder="correo@ejemplo.com"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-tec-blue-primary focus:bg-white focus:border-transparent transition"
              />
            </div>

            {/* Observaciones */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="observaciones"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <FaCommentAlt className="text-tec-red-primary text-xs" />
                Observaciones adicionales
                <span className="text-gray-400 font-normal ml-1">(opcional)</span>
              </label>
              <textarea
                id="observaciones"
                name="observaciones"
                rows={4}
                placeholder="Escribe aquí cualquier comentario adicional..."
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-tec-blue-primary focus:bg-white focus:border-transparent transition resize-none"
              />
            </div>

            {/* Nota campos obligatorios */}
            <p className="text-xs text-gray-400">
              <span className="text-tec-red-primary">*</span> Campos obligatorios
            </p>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-tec-red-primary text-white font-bold py-3 rounded-lg hover:bg-tec-red-primary/90 transform transition-transform duration-200 hover:scale-105 shadow-sm"
            >
              <FaPaperPlane className="text-sm" />
              Enviar suscripción
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
