"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Typography, Button, Chip } from "@material-tailwind/react";
import { FaFilePdf } from "react-icons/fa";
import { withFullUrl } from "@/lib/basePath";

export default function ArticlesList({ title, articles }) {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Título dinámico */}
      <Typography
        variant="h4"
        color="blue-gray"
        className="mb-6 font-bold border-b-2 border-tec-red-primary w-fit"
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

          // --- Autores: soporta string o array ---
          const authorsText = Array.isArray(article.authors)
            ? article.authors.map((a) => a.name).join(", ")
            : article.author;

          return (
            <Card
              key={article.id}
              onClick={handleCardClick}
              className="group border-l-4 hover:shadow-lg transition-all duration-300 hover:border-l-tec-blue-secondary cursor-pointer"
            >
              <CardBody>
                {/* Título principal */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200"
                >
                  {article.title}
                </Typography>

                {/* Subtítulo en inglés (si existe) */}
                {article.title_en && (
                  <Typography
                    variant="h8"
                    color="gray"
                    className="font-semibold mb-2 border-l-2 pl-2 text-gray-500"
                  >
                    {article.title_en}
                  </Typography>
                )}

                {/* Autores y categoría */}
                <div className="flex items-center gap-3 mb-3">
                  {authorsText && (
                    <Typography variant="small" color="gray" className="font-medium">
                      {authorsText}
                    </Typography>
                  )}

                  {article.category && (
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
                  )}
                </div>

                {/* Botón de descarga */}
                {article.pdf && (
                  <Button
                    size="sm"
                    variant="outlined"
                    color="red"
                    className="normal-case inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm"
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
