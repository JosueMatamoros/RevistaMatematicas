// src/lib/basePath.js
export const withBasePath = (p) =>
  (process.env.NEXT_PUBLIC_BASE_PATH || '') + p;

export const withFullUrl = (p) => {
  const host = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return host + (process.env.NEXT_PUBLIC_BASE_PATH || '') + p;
};
