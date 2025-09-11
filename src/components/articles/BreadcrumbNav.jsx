"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadcrumbNav() {
  const pathname = usePathname(); 
  const segments = pathname.split("/").filter(Boolean); 

  return (
    <div >
      <Breadcrumbs className="bg-transparent  ">
        {/* Siempre Home */}
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-800 hover:text-gray-900 text-sm font-medium"
        >
          <AiFillHome className="text-lg" />
          Home
        </Link>

        {segments.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;

          return isLast ? (
            <span
              key={idx}
              className="text-gray-900 font-semibold text-sm capitalize"
            >
              {seg.replace(/_/g, " ")}
            </span>
          ) : (
            <Link
              key={idx}
              href={href}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium capitalize"
            >
              {seg.replace(/_/g, " ")}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
