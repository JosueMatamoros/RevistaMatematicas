"use client";
import {
  FaHome,
  FaBook,
  FaUserEdit,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";
import { FaPencil, FaArrowDown19 } from "react-icons/fa6";

export default function NavsComponent({ isSidebarOpen }) {
  return (
    <div
      className={`
        w-full transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "flex justify-start" : "flex justify-center"}
      `}
    >
      <nav
        className={`
          rounded-md border bg-white shadow-md px-6 py-3 relative
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-full" : "inline-block"}
        `}
      >
        <ul
          className={`flex ${
            isSidebarOpen ? "justify-start" : "justify-center"
          } items-center space-x-8 text-base transition-all duration-300`}
        >
          {/* Inicio */}
          <li className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
            <FaHome />
            <span>Inicio</span>
          </li>

          {/* Secciones */}
          <li className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
              <FaBook />
              <span>Secciones</span>
              <FaChevronDown className="text-gray-500 text-xs transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <ul className="absolute left-0 mt-2 z-10 min-w-[220px] rounded-md bg-white shadow-lg p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {[
                "Temas de matemática",
                "Didáctica y software",
                "Historia",
                "Olimpiadas",
                "Temas de geometría",
                "Matemática y algoritmos",
                "Enseñanza Inclusiva en Matemática",
                "Curiosidades Matemáticas",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white "
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>

          {/* Material Didáctico */}
          <li className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
              <FaPencil />
              <span>Material didáctico</span>
              <FaChevronDown className="text-gray-500 text-xs transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <ul className="absolute left-0 mt-2 z-10 min-w-[220px] rounded-md bg-white shadow-lg p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {[
                "Libros",
                "Materiales revisados",
                "Materiales sin revisión",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>

          {/* Números anteriores */}
          <li className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
            <FaArrowDown19 />
            <span>Números anteriores</span>
          </li>

          {/* Para autores */}
          <li className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
            <FaUserEdit />
            <span>Para autores</span>
          </li>

          {/* Acerca de */}
          <li className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
              <FaInfoCircle />
              <span>Acerca de</span>
              <FaChevronDown className="text-gray-500 text-xs transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <ul className="absolute left-0 mt-2 z-10 min-w-[220px] rounded-md bg-white shadow-lg p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {[
                "Sobre la revista",
                "Política Editorial",
                "Cuerpo Editorial",
                "Declaración de originalidad",
                "Contacto",
                "Estadísticas",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
