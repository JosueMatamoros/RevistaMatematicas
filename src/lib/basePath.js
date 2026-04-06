// src/lib/basePath.js
const isProd = process.env.NODE_ENV === "production";
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const BASE_PATH = isProd && envBasePath
  ? `/${envBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const SITE_URL = envSiteUrl.replace(/\/+$/, "");

const getHost = () => {
  if (SITE_URL) return SITE_URL;
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return isProd ? "" : "http://localhost:3000";
};

export const withBasePath = (p) => {
  if (!p || typeof p !== "string") return p;
  // Si ya tiene el basePath, no duplicar
  if (p.startsWith(BASE_PATH) && BASE_PATH !== "") return p;
  // Si es URL absoluta, no modificar
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  return BASE_PATH + p;
};

export const withFullUrl = (p) => {
  const host = getHost();
  if (!p || typeof p !== "string") return p;
  // Si ya es URL absoluta, devolverla
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  if (!host) return withBasePath(p);
  // Si ya tiene el basePath, solo agregar host
  if (p.startsWith(BASE_PATH) && BASE_PATH !== "") return host + p;
  return host + BASE_PATH + p;
};
