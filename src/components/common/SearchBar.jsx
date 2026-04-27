"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length >= 2) {
      router.push(`/buscar?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/buscar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center gap-2 bg-white border-2 border-slate-200 focus-within:border-tec-blue-secondary rounded-xl px-3 py-2 shadow-sm transition-colors">
        <IoSearchSharp size={17} className="text-slate-400 shrink-0" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artículos..."
          className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none min-w-0"
        />
        {query.length > 0 && (
          <button
            type="submit"
            className="shrink-0 bg-tec-blue-primary hover:bg-tec-blue-primary/90 text-white text-xs font-medium px-3 py-1 rounded-lg transition-colors"
          >
            Ir
          </button>
        )}
      </div>
    </form>
  );
}
