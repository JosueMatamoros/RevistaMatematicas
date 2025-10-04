"use client";
import Link from "next/link";
import {
  FaHome,
  FaBook,
  FaUserEdit,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";
import { FaPencil, FaArrowDown19 } from "react-icons/fa6";
import { withBasePath } from "@/lib/basePath";

export default function NavsComponent({ isSidebarOpen }) {
  return (
    <div
      className={`
        w-full transition-all duration-300 ease-in-out mt-4
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
          <li>
            <Link
              href={withBasePath("/")}
              className="flex items-center space-x-2 hover:text-tec-blue-primary hover:underline underline-offset-4"
            >
              <FaHome />
              <span>Inicio</span>
            </Link>
          </li>

          {/* Secciones */}
          <li className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
              <FaBook />
              <span>Secciones</span>
              <FaChevronDown className="text-gray-500 text-xs transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <ul className="absolute left-0 mt-2 z-10 min-w-[220px] rounded-md bg-white shadow-lg p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Temas de matemática</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Didáctica y software</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Historia</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Olimpiadas</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Temas de geometría</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Matemática y algoritmos</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>
                  Enseñanza Inclusiva en Matemática
                </Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Curiosidades Matemáticas</Link>
              </li>
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
              <li className="cursor-pointer text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Libros</Link>
              </li>
              <li className="cursor-pointer text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Materiales revisados</Link>
              </li>
              <li className="cursor-pointer text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Materiales sin revisión</Link>
              </li>
            </ul>
          </li>

          {/* Todos los Números */}
          <li>
            <Link
              href={withBasePath("/Articulos")}
              className="flex items-center space-x-2 hover:text-tec-blue-primary hover:underline underline-offset-4"
            >
              <FaArrowDown19 />
              <span>Todos los Números</span>
            </Link>
          </li>

          {/* Para autores */}
          <li>
            <Link
              href={withBasePath("/paginasgenerales/instrucciones")}
              className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4"
            >
              <FaUserEdit />
              <span>Para autores</span>
            </Link>
          </li>

          {/* Acerca de */}
          <li className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-tec-blue-primary hover:underline underline-offset-4">
              <FaInfoCircle />
              <span>Acerca de</span>
              <FaChevronDown className="text-gray-500 text-xs transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <ul className="absolute left-0 mt-2 z-10 min-w-[220px] rounded-md bg-white shadow-lg p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/paginasgenerales/sobrelarevista")}>
                  Sobre la revista
                </Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/paginasgenerales/politicaeditorial")}>
                  Política Editorial
                </Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/paginasgenerales/equipoeditorial")}>Cuerpo Editorial</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Declaración de originalidad</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Contacto</Link>
              </li>
              <li className="text-slate-800 w-full text-base rounded-md p-2 transition-all duration-200 hover:bg-tec-blue-primary hover:text-white">
                <Link href={withBasePath("/")}>Estadísticas</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
