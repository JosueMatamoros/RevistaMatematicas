"use client";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

const indexers = [
  { name: "SciELO", src: withBasePath("/indexadoras/scileoCambiar.webp"), url: "https://www.scielo.sa.cr/scielo.php?script=sci_serial&pid=1659-0643&lng=es&nrm=iso" },
  { name: "Redalyc", src: withBasePath("/indexadoras/redalycLogo.webp"), url: "https://www.redalyc.org/revista.oa?id=6079&tipo=coleccion" },
  { name: "Latindex", src: withBasePath("/indexadoras/latindexLogo.webp"), url: "https://www.latindex.org/latindex/ficha/15341" },
  { name: "DOAJ", src: withBasePath("/indexadoras/DOAJlogo.webp"), url: "https://doaj.org/toc/1659-0643" },
  { name: "REDIB", src: withBasePath("/indexadoras/redibLogo.webp"), url: "https://www.redib.org/Serials/Record/oai_revista1119-revista-digital-matem%C3%A1tica-educaci%C3%B3n-e-internet" },
  { name: "Kimuk", src: withBasePath("/indexadoras/kimukLogo.webp"), url: "https://kimuk.conare.ac.cr/Search/Results?lookfor=1659-0643" },
  { name: "Portal Revistas TEC", src: withBasePath("/indexadoras/portalRevistasTEC.webp"), url: "https://revistas.tec.ac.cr/index.php/matematica/", fullWidth: true },
];

export default function IndexingCards() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {indexers.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer nofollow external"
            aria-label={`Ir al sitio de ${item.name}`}
            prefetch={false}
            className={`relative h-16 sm:h-20 rounded-lg overflow-hidden shadow-md cursor-pointer group transition-transform duration-300 hover:scale-[1.03] ${
              item.fullWidth ? "sm:col-span-3 col-span-2" : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              priority={false}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
              className="object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm text-center px-2">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
