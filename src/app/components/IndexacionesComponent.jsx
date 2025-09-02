"use client";

const indexaciones = [
  {
    name: "SciELO",
    description: "Scientific Electronic Library Online",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/ScieloLogo.png",
    link: "https://www.redalyc.org/revista.oa?id=6079",
  },
  {
    name: "Redalyc",
    description: "Red de Revistas Científicas de América Latina y el Caribe",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/redalyc.png",
    link: "https://www.redalyc.org/revista.oa?id=6079&tipo=coleccion",
  },
  {
    name: "Latindex",
    description: "Sistema Regional de Información en Línea",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/latindex02.png",
    link: "https://www.latindex.org/latindex/ficha/15341",
  },
  {
    name: "DOAJ",
    description: "Directory of Open Access Journals",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/LogoDOAJ.png",
    link: "https://doaj.org/toc/1659-0643",
  },
  {
    name: "Portal Revistas TEC",
    description: "Portal de revistas del Tecnológico de Costa Rica",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/portalrevistastec.png",
    link: "https://revistas.tec.ac.cr/index.php/matematica/",
  },
  {
    name: "REDIB",
    description: "Red Iberoamericana de Innovación y Conocimiento Científico",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/REBIDLogo.png",
    link: "https://redib.org/Serials/Record/oai_revista1119-revista-digital-matemática-educación-e-internet",
  },
  {
    name: "Kimuk",
    description: "Repositorio Nacional de Costa Rica",
    logo: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/images/KimukLogo.png",
    link: "https://kimuk.conare.ac.cr/Search/Results?lookfor=1659-0643",
  },
];

export default function IndexacionesComponent() {
  return (
    <div className="space-y-4">
      {indexaciones.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-[1.02] bg-white"
        >
          {/* Logo */}
          <img src={item.logo} alt={item.name} className="h-12 w-auto object-contain" />

          {/* Texto */}
          <div>
            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
