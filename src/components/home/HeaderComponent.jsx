"use client";
import Image from "next/image";
import { withBasePath} from "@/lib/basePath";

export default function HeaderComponent() {
  return (
    <div>
      <header className="bg-tec-blue-primary text-white border-b-4 border-tec-red-primary">
        {/* Header top section with logoHeader, tituloHeaderBlanco and logoTECBLanco */}
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <Image
              src={withBasePath("/logoHeader.png")}
              alt="Matemática Logo"
              width={120}
              height={135}
              className="h-14 w-auto sm:h-20"
              priority
            />
            <Image
              src={withBasePath("/tituloHeaderBlanco.png")}
              alt="Título Matemática"
              width={1720}
              height={400}
              className="h-10 w-auto sm:h-16"
              priority
            />
          </div>

          <Image
            src={withBasePath("/logoTECBLanco.png")}
            alt="TEC Logo"
            width={340}
            height={85}
            className="h-14 w-auto hidden sm:block"
            priority
          />
        </div>
      </header>
    </div>
  );
}
