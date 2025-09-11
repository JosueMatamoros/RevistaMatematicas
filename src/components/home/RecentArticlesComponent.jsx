"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { FaFilePdf } from "react-icons/fa";
import { withFullUrl } from "@/lib/basePath";

const articles = [
  {
    id: 1,
    title:
      "Errores y dificultades frecuentes al aplicar las técnicas de conteo",
    title_en:
      "Frequent errors and difficulties in applying counting techniques",
    author: "Alejandra Alfaro-Barquero, Sonia Chinchilla-Brenes",
    category: "Investigación",
    color: "blue",
    slug: "Articulos/V26/N1_2025/Alfaro",
    pdf: withFullUrl(
      "/Articulos/V26/N1_2025/Alfaro/RevistaDigital_V26_n1_2025_Alfaro.pdf"
    ),
  },
  {
    id: 2,
    title: "Carreras STEM y su asociación con las tipologías RIASEC de Holland",
    title_en: "",
    author: "Manuel Vicente Centeno Romero, Marvelis González Rodríguez",
    category: "Didáctica",
    color: "red",
    // sin slug todavía
  },
];

export default function RecentArticlesComponent() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography
        variant="h4"
        color="blue-gray"
        className="mb-6 font-bold border-b-2 border-tec-red-primary w-fit"
      >
        Volumen 26, Número 1, Agosto 2025 - Febrero 2026
      </Typography>

      <div className="space-y-6">
        {articles.map((article) => {
          const handleCardClick = () => {
            if (article.slug) {
              router.push(`/${article.slug}`);
            }
          };

          const handlePdfDownload = (e) => {
            e.stopPropagation();
            if (article.slug && article.pdf) {
              const pdfUrl = `${article.pdf}`;
              window.open(pdfUrl, "_blank");
            }
          };

          return (
            <Card
              key={article.id}
              onClick={handleCardClick}
              className="group border-l-4 hover:shadow-lg transition-all duration-300 hover:border-l-tec-blue-secondary cursor-pointer"
            >
              <CardBody>
                {/* Título */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200"
                >
                  {article.title}
                </Typography>

                <Typography
                  variant="h8"
                  color="gray"
                  className="font-semibold mb-2 border-l-2 pl-2 text-gray-500"
                >
                  {article.title_en}
                </Typography>

                {/* Autor + Chip */}
                <div className="flex items-center gap-3 mb-3">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-medium"
                  >
                    {article.author}
                  </Typography>

                  <Chip
                    size="sm"
                    variant="outlined"
                    value={article.category}
                    className={
                      article.color === "blue"
                        ? "border-blue-300 text-blue-700 bg-blue-50"
                        : article.color === "red"
                        ? "border-red-300 text-red-700 bg-red-50"
                        : "border-gray-300 text-gray-700 bg-gray-50"
                    }
                  />
                </div>

                {/* Botón Descargar PDF */}
                {article.pdf && (
                  <Button
                    size="sm"
                    variant="outlined"
                    color="red"
                    className="normal-case inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm "
                    onClick={handlePdfDownload}
                  >
                    Descargar 
                    <FaFilePdf className="text-red-600 w-4 h-4" />
                  </Button>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
