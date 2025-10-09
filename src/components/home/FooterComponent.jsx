"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaShareAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function FooterComponent() {
  const rejectionRates = [
    { year: 2024, rate: "16 %" },
    { year: 2023, rate: "26,5 %" },
    { year: 2022, rate: "29,5 %" },
    { year: 2021, rate: "28 %" },
    { year: 2020, rate: "20 %" },
    { year: 2019, rate: "26,5 %" },
    { year: 2018, rate: "25 %" },
    { year: 2017, rate: "40 %" },
  ];

  return (
    <footer className="bg-[#0c2438] text-white pt-6 pb-12 px-6 md:px-16">
      {/* Encabezado superior */}
      <div className="text-center border-b border-gray-600 pb-4 mb-8">
        <p className="text-sm md:text-base text-gray-200">
          Revista digital Matemática, Educación e Internet{" "}
          <span className="text-[#0070d1] font-semibold">ISSN 1659-0643</span>
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-12 border-b border-gray-600 pb-10">
        {/* Contactos */}
        <div className="flex flex-col min-w-[250px] max-w-[340px] mx-auto order-1">
          <h2 className="text-2xl font-bold text-[#0070d1] mb-6 text-center md:text-left">
            Contactos
          </h2>
          <div className="space-y-5 text-gray-300">
            <div>
              <p className="text-white font-semibold">Directora</p>
              <p>Nuria Figueroa Flores</p>
            </div>
            <div>
              <p className="text-white font-semibold">Editor</p>
              <p>Greivin Ramírez Arce</p>
            </div>
            <div>
              <p className="text-white font-semibold">Edición de materiales</p>
              <p>Rebeca Solís Ortega</p>
            </div>
          </div>
          <div className="flex gap-4 text-xl my-5 justify-center md:justify-start">
            <FaFacebookF className="hover:text-[#0070d1] cursor-pointer" />
            <FaTwitter className="hover:text-[#0070d1] cursor-pointer" />
            <FaShareAlt className="hover:text-[#0070d1] cursor-pointer" />
          </div>
        </div>

        {/* Información general */}
        <div className="flex flex-col min-w-[250px] max-w-[380px] mx-auto order-2">
          <h2 className="text-2xl font-bold text-[#0070d1] mb-6 text-center sm:text-start">
            Información general
          </h2>
          <div className="text-gray-300 space-y-4 text-justify">
            <p className="font-semibold text-white text-center md:text-justify">
              Escuela de Matemática, Tecnológico de Costa Rica, Cartago, Costa
              Rica.
            </p>
            <p className="flex items-start gap-3">
              <FaEnvelope className="text-[#0070d1] flex-shrink-0 w-5 h-5 mt-[2px]" />
              <span>Apartado postal: 159-7050. Cartago, Costa Rica.</span>
            </p>
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#0070d1] flex-shrink-0 w-5 h-5 mt-[2px]" />
              <span>
                Dirección: Calle 15, Avenida 14. 1 km Sur de la Basílica de los
                Ángeles.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#0070d1] flex-shrink-0 w-5 h-5 mt-[2px]" />
              <span>Teléfono (506) 2550-2225</span>
            </p>
          </div>
        </div>

        {/* Tasas de rechazo */}
        <div className="flex flex-col min-w-[250px] max-w-[340px] mx-auto md:col-span-2 lg:col-span-1 order-3">
          <h2 className="text-2xl font-bold text-[#0070d1] mb-6 text-center lg:text-left">
            Tasas de rechazo
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-center">
            {rejectionRates.map((item) => (
              <div
                key={item.year}
                className="bg-[#112f49] p-3 rounded-lg flex items-center justify-between text-red-500 font-semibold"
              >
                <span className="text-gray-300 min-w-[55px] text-left">
                  {item.year}
                </span>
                <span className="ml-3">{item.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer inferior con licencia */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-gray-400 text-sm mt-6 text-center">
        <Image
          src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-nd.png"
          alt="Creative Commons BY-NC-ND"
          width={88}
          height={31}
          className="rounded"
        />
        <p>
          Todos los artículos publicados están bajo licencia Creative Commons
          Atribución-NoComercial-SinDerivadas 4.0 Internacional
        </p>
      </div>
    </footer>
  );
}
