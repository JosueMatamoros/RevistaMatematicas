"use client";

import { Card } from "@material-tailwind/react";
import { TbExternalLink } from "react-icons/tb";

export default function PersonCard({
  name,
  email,
  role,
  institution,
  location,
}) {
  return (
    <Card className="p-4 border-l-4 border-x-tec-blue-secondary rounded-xl shadow-md text-center hover:scale-[1.02] transition-transform hover:shadow-lg">
      {/* Nombre */}
      <h3 className="text-base font-semibold text-gray-900">{name}</h3>

      {/* Correo */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="flex justify-center items-center gap-1 text-sm text-tec-blue-secondary hover:underline"
        >
          {email}
          <TbExternalLink className="text-xs" />
        </a>
      )}

      {/* Rol */}
      {role && (
        <div className="my-2 flex justify-center">
          <span className="inline-block px-2  text-[11px] uppercase tracking-wide rounded-md bg-blue-50 text-tec-blue-primary border border-blue-200">
            {role}
          </span>
        </div>
      )}

      {/* Institución */}
      {institution && <p className="text-sm text-gray-600">{institution}</p>}

      {/* Ubicación */}
      {location && <p className="text-sm text-gray-500">{location}</p>}
    </Card>
  );
}
