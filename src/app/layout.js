import "./globals.css";
import FooterComponent from "@/components/home/FooterComponent";
import HeaderComponent from "@/components/home/HeaderComponent";
import { inter, poppins, sourceSans } from "./fonts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revistas.tec.ac.cr/matematica";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Revista Digital Matemática, Educación e Internet",
    template: "%s | Revista Digital Matemática",
  },
  description:
    "Revista Digital: Matemática, Educación e Internet — publicación académica del Tecnológico de Costa Rica dedicada a la difusión de artículos científicos en matemática y educación.",
  keywords: [
    "matemática",
    "educación matemática",
    "revista científica",
    "TEC",
    "Tecnológico de Costa Rica",
    "internet",
    "artículos académicos",
  ],
  authors: [{ name: "Tecnológico de Costa Rica" }],
  creator: "Tecnológico de Costa Rica",
  publisher: "Tecnológico de Costa Rica",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteUrl,
    siteName: "Revista Digital Matemática, Educación e Internet",
    title: "Revista Digital Matemática, Educación e Internet",
    description:
      "Publicación académica del Tecnológico de Costa Rica dedicada a la difusión de artículos científicos en matemática y educación.",
    images: [
      {
        url: "/og-image.png",
        width: 120,
        height: 135,
        alt: "Logo Revista Digital Matemática",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Revista Digital Matemática, Educación e Internet",
    description:
      "Publicación académica del TEC dedicada a artículos científicos en matemática y educación.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} ${sourceSans.variable}`}
    >
      <body className="antialiased">
        <div className="min-h-svh">
          <HeaderComponent />
          {children}
        </div>
        <FooterComponent />
      </body>
    </html>
  );
}
