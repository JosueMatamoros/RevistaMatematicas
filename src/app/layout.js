import "./globals.css";
import FooterComponent from "@/components/home/FooterComponent";
import HeaderComponent from "@/components/home/HeaderComponent";
import { inter, poppins, sourceSans } from "./fonts";

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || "https://tecdigital.tec.ac.cr";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/servicios/revistamatematica";
const siteUrl = `${siteOrigin}${basePath}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digital Journal: Mathematics, Education and Internet",
    template: "%s | Digital Journal Mathematics",
  },
  description:
    "Digital Journal: Mathematics, Education and Internet — open-access academic publication by the Costa Rica Institute of Technology (TEC), dedicated to disseminating scientific articles in mathematics and education.",
  keywords: [
    "mathematics",
    "mathematics education",
    "scientific journal",
    "TEC",
    "Costa Rica Institute of Technology",
    "open access",
    "academic articles",
  ],
  authors: [{ name: "Costa Rica Institute of Technology" }],
  creator: "Costa Rica Institute of Technology",
  publisher: "Costa Rica Institute of Technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_CR",
    url: siteUrl,
    siteName: "Digital Journal: Mathematics, Education and Internet",
    title: "Digital Journal: Mathematics, Education and Internet",
    description:
      "Open-access academic publication by the Costa Rica Institute of Technology, dedicated to disseminating scientific articles in mathematics and education since 2000.",
  },
  twitter: {
    card: "summary",
    title: "Digital Journal: Mathematics, Education and Internet",
    description:
      "Open-access academic publication by TEC dedicated to scientific articles in mathematics and education.",
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
