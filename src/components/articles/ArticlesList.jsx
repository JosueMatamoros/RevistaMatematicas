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

export default function ArticlesList({ title, articles }) {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-4 ">
      {/* Título dinámico */}
      <Typography
        variant="h4"
        className="font-display mb-6 font-bold border-b-2 border-tec-red-primary w-fit"
      >
        {title}
      </Typography>

      <div className="space-y-6">
        {articles.map((article) => {
          const handleCardClick = () => {
            if (article.slug) router.push(`/${article.slug}`);
          };

          const handlePdfDownload = (e) => {
            e.stopPropagation();
            if (article.pdf) window.open(withFullUrl(article.pdf), "_blank");
          };

          // --- Autores: ---
          const authorsText = Array.isArray(article.authors)
            ? article.authors.map((a) => a.name).join(", ")
            : article.author;

          return (
            <Card
              key={article.id}
              onClick={handleCardClick}
              className="group border-l-4 hover:shadow-lg bg-gray-50 transition-all duration-300 hover:border-l-tec-blue-secondary cursor-pointer"
            >
              <CardBody>
                {/* Título principal */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-alt font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200"
                >
                  {article.title}
                </Typography>

                {/* Subtítulo en inglés (si existe) */}
                {article.title_en && (
                  <Typography
                    variant="h8"
                    color="gray"
                    className="font-alt font-semibold mb-2 border-l-2 pl-2 text-gray-500"
                  >
                    {article.title_en}
                  </Typography>
                )}

                {/* Autores y categoría SOLO en pantallas grandes */}
                <div className="flex items-center gap-3 mb-3">
                  {authorsText && (
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium"
                    >
                      {authorsText}
                    </Typography>
                  )}

                  {/* Chip en pantallas grandes */}
                  {article.category && (
                    <Chip
                      size="sm"
                      variant="outlined"
                      value={article.category}
                      className={"hidden md:inline-flex border-blue-300 text-blue-700 bg-blue-50"}
                    />
                  )}
                </div>

                {/* Botón de descarga SOLO en pantallas grandes */}
                {article.pdf && (
                  <Button
                    size="sm"
                    variant="outlined"
                    color="red"
                    className="normal-case items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm hidden md:inline-flex"
                    onClick={handlePdfDownload}
                  >
                    Descargar
                    <FaFilePdf className="text-red-600 w-4 h-4" />
                  </Button>
                )}

                {/* Chip en pantallas pequeñas y medianas */}
                {article.category && (
                  <div className="mt-3 flex justify md:hidden">
                    <Chip
                      size="sm"
                      variant="outlined"
                      value={article.category}
                      className="border-blue-300 text-blue-700 bg-blue-50"
                    />
                  </div>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
