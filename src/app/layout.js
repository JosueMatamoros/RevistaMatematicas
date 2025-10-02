import "./globals.css";

export const metadata = {
  title: "Revista Digital Matemática",
  description: "Ejemplo con Tailwind y fuentes globales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
