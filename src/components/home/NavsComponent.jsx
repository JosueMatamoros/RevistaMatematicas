"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaBook,
  FaUserEdit,
  FaInfoCircle,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaPencil, FaArrowDown19 } from "react-icons/fa6";
import SearchBar from "@/components/common/SearchBar";

export default function NavsComponent({ isSidebarOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* ---------- NAV PRINCIPAL (pantallas grandes) ---------- */}
      <div
        className={`
          hidden md:flex w-full transition-all duration-300 ease-in-out mt-4
          ${isSidebarOpen ? "justify-start" : "justify-center"}
        `}
      >
        <nav
          className={`
            rounded-md border shadow-md px-6 py-3 relative
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
                href="/"
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
                {[
                  "Temas de matemática",
                  "Didáctica y software",
                  "Historia",
                  "Olimpiadas",
                  "Temas de geometría",
                  "Matemática y algoritmos",
                  "Enseñanza Inclusiva en Matemática",
                  "Curiosidades Matemáticas",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="/"
                      className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                    >
                      {item}
                    </Link>
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
                  { text: "Libros", href: "/materialdidactico/libros" },
                  {
                    text: "Materiales revisados",
                    href: "/materialdidactico/revisados",
                  },
                  {
                    text: "Materiales sin revisión",
                    href: "/materialdidactico/sinrevision",
                  },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Todos los Números */}
            <li>
              <Link
                href="/Articulos"
                className="flex items-center space-x-2 hover:text-tec-blue-primary hover:underline underline-offset-4"
              >
                <FaArrowDown19 />
                <span>Todos los Números</span>
              </Link>
            </li>

            {/* Para autores */}
            <li>
              <Link
                href="/paginasgenerales/instrucciones"
                className="flex items-center space-x-2 hover:text-tec-blue-primary hover:underline underline-offset-4"
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
                <li>
                  <Link
                    href="/paginasgenerales/sobrelarevista"
                    className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                  >
                    Sobre la revista
                  </Link>
                </li>
                <li>
                  <Link
                    href="/paginasgenerales/politicaeditorial"
                    className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                  >
                    Política Editorial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/paginasgenerales/equipoeditorial"
                    className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                  >
                    Cuerpo Editorial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/paginasgenerales/declaracionoriginalidad"
                    className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                  >
                    Declaración de originalidad
                  </Link>
                </li>
                <li>
                  <a
                    href="https://revistas.tec.ac.cr/index.php/matematica/estadisticas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-slate-800 text-base rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                  >
                    Estadísticas
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* ---------- MENU RESPONSIVE (pantallas pequeñas) ---------- */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
        {/* Botón hamburguesa + SearchBar */}
        <div className="flex items-center w-full justify-between gap-4 ">
          <button
            className="text-tec-blue-primary text-2xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
          <SearchBar />
        </div>
      </div>

      {/* Overlay y panel lateral */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          ></div>

          <aside
            className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl rounded-r-2xl z-50 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b">
              <h2 className="text-lg font-semibold text-tec-blue-primary">
                Menú
              </h2>
              <button
                className="text-gray-600 hover:text-red-500 text-xl transition"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="p-5 space-y-2 overflow-y-auto h-[calc(100%-4rem)]">
              {[
                { icon: <FaHome />, text: "Inicio", href: "/" },
                {
                  icon: <FaArrowDown19 />,
                  text: "Todos los Números",
                  href: "/Articulos",
                },
                {
                  icon: <FaUserEdit />,
                  text: "Para autores",
                  href: "/paginasgenerales/instrucciones",
                },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center space-x-2 hover:text-tec-blue-primary hover:underline underline-offset-4"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}

              {/* Submenús con animación */}
              {[
                {
                  id: "secciones",
                  icon: <FaBook />,
                  title: "Secciones",
                  items: [
                    "Temas de matemática",
                    "Didáctica y software",
                    "Historia",
                    "Olimpiadas",
                    "Temas de geometría",
                    "Matemática y algoritmos",
                    "Enseñanza Inclusiva en Matemática",
                    "Curiosidades Matemáticas",
                  ],
                },
                {
                  id: "material",
                  icon: <FaPencil />,
                  title: "Material didáctico",
                  items: [
                    { text: "Libros", href: "/materialdidactico/libros" },
                    {
                      text: "Materiales revisados",
                      href: "/materialdidactico/revisados",
                    },
                    {
                      text: "Materiales sin revisión",
                      href: "/materialdidactico/sinrevision",
                    },
                  ],
                },
                {
                  id: "acerca",
                  icon: <FaInfoCircle />,
                  title: "Acerca de",
                  items: [
                    {
                      text: "Sobre la revista",
                      href: "/paginasgenerales/sobrelarevista",
                    },
                    {
                      text: "Política Editorial",
                      href: "/paginasgenerales/politicaeditorial",
                    },
                    {
                      text: "Cuerpo Editorial",
                      href: "/paginasgenerales/equipoeditorial",
                    },
                    {
                      text: "Declaración de originalidad",
                      href: "/paginasgenerales/declaracionoriginalidad",
                    },
                    {
                      text: "Estadísticas",
                      href: "https://revistas.tec.ac.cr/index.php/matematica/estadisticas",
                      external: true,
                    },
                  ],
                },
              ].map((menu) => (
                <li key={menu.id}>
                  <button
                    onClick={() => toggleSubmenu(menu.id)}
                    className="flex items-center justify-between w-full hover:text-tec-blue-primary"
                  >
                    <span className="flex items-center gap-2">
                      {menu.icon} {menu.title}
                    </span>
                    <FaChevronDown
                      className={`text-gray-500 text-xs transition-transform duration-200 ${
                        openSubmenu === menu.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      openSubmenu === menu.id
                        ? "max-h-96 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {menu.items.map((sub, i) => (
                      <li key={i}>
                        {typeof sub === "string" ? (
                          <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-slate-800 text-sm rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                          >
                            {sub}
                          </Link>
                        ) : sub.external ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="block text-slate-800 text-sm rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                          >
                            {sub.text}
                          </a>
                        ) : (
                          <Link
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-slate-800 text-sm rounded-md p-2 hover:bg-tec-blue-primary hover:text-white"
                          >
                            {sub.text}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </>
  );
}
