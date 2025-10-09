import "./globals.css";
import FooterComponent from "@/components/home/FooterComponent";
import HeaderComponent from "@/components/home/HeaderComponent";
import { inter, poppins, sourceSans } from "./fonts";

export const metadata = {
  title: "Revista Digital Matemática",
  description: "Ejemplo optimizado con next/font/local",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} ${sourceSans.variable}`}
    >
      <body className="antialiased">
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
