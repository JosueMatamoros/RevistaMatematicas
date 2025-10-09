import "./globals.css";
import FooterComponent from "@/components/home/FooterComponent";

export const metadata = {
  title: "Revista Digital Matemática",
  description: "Ejemplo con Tailwind y fuentes globales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <FooterComponent/> 
      </body>
    </html>
  );
}
