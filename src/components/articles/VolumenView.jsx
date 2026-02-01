"use client";

import Link from "next/link";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { LuBookOpen } from "react-icons/lu";

export default function VolumenView({ volNum, issues }) {
  if (!issues || issues.length === 0) {
    return <div className="p-8 text-red-500">Volumen no encontrado</div>;
  }
  return (
    <>
      {/* El layout ya incluye NavsComponent y BreadcrumbNav, así que no los duplicamos aquí */}
      <div className="container mx-auto px-6 py-6">
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Volumen {volNum}
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center">
            Lista de números disponibles de la revista digital{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue) => {
            const cleanIssue = issue.id.split("_").slice(1).join("_");
            return (
              <Card
                key={issue.id}
                className="border-l-4 border-red-500 hover:border-tec-blue-secondary transition-colors duration-200 group"
              >
                <CardBody>
                  <div className="mb-4">
                    <Typography
                      variant="h4"
                      className="font-bold group-hover:text-tec-blue-secondary transition-colors duration-200"
                    >
                      Número {issue.number}
                    </Typography>
                  </div>
                  <Typography color="gray" className="mb-4">
                    {issue.date}
                  </Typography>
                  <Link href={`/Articulos/V${issue.volume}/${cleanIssue}`}>
                    <Button
                      className="normal-case flex items-center gap-2 px-5 py-2 rounded-md
                      bg-gray-100 text-gray-800 font-medium shadow-sm
                      hover:bg-gray-200 hover:shadow-md
                      transition-all duration-200 border border-gray-300 hover:scale-105"
                    >
                      <LuBookOpen className="w-4 h-4" />
                      Ver artículos
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
