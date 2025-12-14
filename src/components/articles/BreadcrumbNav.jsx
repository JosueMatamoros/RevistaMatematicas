"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadcrumbNav() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div>
      <Breadcrumbs
        className="
          absolute -mt-14
          bg-transparent
          justify-center
          text-white
          [&>ol>li>a]:text-gray-300                   /* anteriores */
          [&>ol>li>a:hover]:text-[#0582E0]            /* hover */
          [&>ol>li>span]:text-white                   /* último */
          [&>ol>li]:text-gray-400                     /* separadores '/' */
        "
      >
        {/* Home */}
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-300 hover:text-[#0582E0] text-sm font-medium"
        >
          <AiFillHome className="text-white text-lg" />
          Inicio
        </Link>

        {segments.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;

          return isLast ? (
            <span
              key={idx}
              className="text-white font-semibold text-sm capitalize"
            >
              {seg.replace(/_/g, " ")}
            </span>
          ) : (
            <Link
              key={idx}
              href={href}
              className="text-gray-300 hover:text-[#0582E0] text-sm font-medium capitalize"
            >
              {seg.replace(/_/g, " ")}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
