import NavsComponent from "@/components/home/NavsComponent";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function RespuestaPage() {
  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-16 max-w-xl text-center">
        <div className="flex flex-col items-center gap-6">
          <FaCheckCircle className="text-green-500 text-6xl" />

          <h1 className="text-3xl font-display font-bold text-tec-blue-primary">
            ¡Suscripción recibida!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Gracias por suscribirte a la revista{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>
            . Hemos recibido tu solicitud y pronto recibirás novedades de
            nuestras publicaciones.
          </p>

          <Link
            href="/"
            className="mt-4 bg-tec-red-primary text-white font-bold px-6 py-2.5 rounded-md hover:bg-tec-red-primary/90 transform transition-transform duration-200 hover:scale-105"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
