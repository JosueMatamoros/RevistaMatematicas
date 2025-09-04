"use client";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <div>
      <header className="bg-tec-blue-primary text-white border-b-4 border-tec-red-primary">
        {/* Header top section with logoHeader, tituloHeaderBlanco and logoTECBLanco */}
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <Image
              src="/logoHeader.png"
              alt="Matemática Logo"
              width={120}
              height={135}
              className="h-20 w-auto"
              priority
            />
            <Image
              src="/tituloHeaderBlanco.png"
              alt="Título Matemática"
              width={1720}
              height={400}
              className="h-16 w-auto"
              priority
            />
          </div>

          <Image
            src="/logoTECBLanco.png"
            alt="TEC Logo"
            width={340}
            height={85}
            className="h-14 w-auto"
            priority
          />
        </div>
      </header>
    </div>
  );
}
