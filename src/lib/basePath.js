// src/lib/basePath.js
const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/servicios/revistamatematica" : "";

export const withBasePath = (p) => {
  if (!p || typeof p !== "string") return p;
  // Si ya tiene el basePath, no duplicar
  if (p.startsWith(BASE_PATH) && BASE_PATH !== "") return p;
  // Si es URL absoluta, no modificar
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  return BASE_PATH + p;
};

export const withFullUrl = (p) => {
  const host = isProd ? "https://tecdigital.tec.ac.cr" : "http://localhost:3000";
  if (!p || typeof p !== "string") return p;
  // Si ya es URL absoluta, devolverla
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  // Si ya tiene el basePath, solo agregar host
  if (p.startsWith(BASE_PATH) && BASE_PATH !== "") return host + p;
  return host + BASE_PATH + p;
};
