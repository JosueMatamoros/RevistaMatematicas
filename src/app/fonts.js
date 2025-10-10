// src/app/fonts.js
import localFont from "next/font/local";

export const inter = localFont({
  src: [
    { path: "./fonts/inter-v20-latin-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-v20-latin-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-v20-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const poppins = localFont({
  src: [
    { path: "./fonts/poppins-v24-latin-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-v24-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  preload: false,
});

export const sourceSans = localFont({
  src: [
    { path: "./fonts/source-sans-3-v19-latin-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/source-sans-3-v19-latin-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/source-sans-3-v19-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
  preload: false, 
});
