"use client";

import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="relative w-full ">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none shadow-sm"
      />
      <button
        type="button"
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-tec-blue-primary hover:bg-tec-blue-primary/90 text-white p-2 rounded-full transition-all duration-200"
      >
        <IoSearchSharp size={16} />
        <span className="sr-only">Buscar</span>
      </button>
    </div>
  );
}
