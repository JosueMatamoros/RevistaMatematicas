"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

const articles = [
  {
    id: 1,
    title: "Errores y dificultades frecuentes al aplicar las técnicas de conteo",
    author: "Alejandra Alfaro-Barquero, Sonia Chinchilla-Brenes",
    category: "Investigación",
    type: "research",
    slug: "RevistaDigital_V26_n1_2025_Alfaro", 
  },
  {
    id: 2,
    title: "Carreras STEM y su asociación con las tipologías RIASEC de Holland",
    author: "Manuel Vicente Centeno Romero, Marvelis González Rodríguez",
    category: "Didáctica",
    type: "teaching",
  },
];

export default function RecentArticlesComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
        Artículos Recientes
      </Typography>

      <div className="space-y-6">
        {articles.map((article) => {
          const cardContent = (
            <Card
              key={article.id}
              className="border-l-4 hover:shadow-lg transition-all duration-300 hover:border-l-blue-500 cursor-pointer"
            >
              <CardBody>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-semibold mb-2 hover:text-blue-600 transition-colors duration-200"
                >
                  {article.title}
                </Typography>

                <div className="flex items-center gap-3 mb-3">
                  <Typography variant="small" color="gray" className="font-medium">
                    {article.author}
                  </Typography>

                  <Chip
                    size="sm"
                    variant="outlined"
                    value={article.category}
                    className={
                      article.type === "research"
                        ? "border-blue-300 text-blue-700 bg-blue-50"
                        : article.type === "teaching"
                        ? "border-red-300 text-red-700 bg-red-50"
                        : "border-gray-300 text-gray-700 bg-gray-50"
                    }
                  />
                </div>

                {/* Botón PDF */}
                <Button
                  size="sm"
                  variant="outlined"
                  color="red"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Descargando PDF del artículo ${article.id}`);
                  }}
                >
                  PDF
                </Button>
              </CardBody>
            </Card>
          );

          // Si el artículo tiene slug → lo envolvemos en Link
          return article.slug ? (
            <Link key={article.id} href={`/Articulos/${article.slug}`}>
              {cardContent}
            </Link>
          ) : (
            <div key={article.id}>{cardContent}</div>
          );
        })}
      </div>
    </div>
  );
}
