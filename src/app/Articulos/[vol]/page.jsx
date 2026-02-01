import { issues } from "@/data/issues";
import VolumenView from "@/components/articles/VolumenView";

export function generateStaticParams() {
  const uniqueVolumes = Array.from(new Set(issues.map((i) => i.volume)));
  return uniqueVolumes.map((vol) => ({ vol: `V${vol}` }));
}

export function generateMetadata({ params }) {
  const volNum = params.vol.replace("V", "");
  const exists = issues.some((i) => String(i.volume) === volNum);

  if (!exists) {
    return { title: "Volumen no encontrado" };
  }

  return {
    title: `Volumen ${volNum}`,
    description: "Revista Digital Matemática, Educación e Internet",
  };
}

export default function VolumenPage({ params }) {
  const volNum = params.vol.replace("V", "");

  const currentIssues = issues
    .filter((i) => String(i.volume) === volNum)
    .sort((a, b) => b.number - a.number);

  return (
    <VolumenView
      volNum={volNum}
      issues={currentIssues}
    />
  );
}
