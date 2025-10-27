"use client";

import React from "react";
import { Typography, Button, Chip } from "@material-tailwind/react";
import { FaFilePdf, FaFileArchive, FaLink } from "react-icons/fa";
import { withFullUrl } from "@/lib/basePath";

export default function BooksCard({
  coverImage,
  title,
  englishTitle,
  authors,
  lastRevision,
  mainPDF,
  resources,
  category,
}) {
  const getValidUrl = (url, type) => {
    // Si es un link externo o el tipo es "link", no usar withFullUrl
    if (
      type === "link" ||
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return url;
    }
    return withFullUrl(url);
  };

  return (
    <div className="group flex flex-col md:flex-row bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border-l-4 hover:border-l-tec-blue-secondary">
      {/* Portada */}
      <div className="md:w-1/4 p-4 flex justify-center items-center ">
        <img
          src={coverImage}
          alt={title}
          className="object-contain w-full max-h-64 aspect-[3/4]"
        />
      </div>

      {/* Información */}
      <div className="md:w-3/4 p-6 flex flex-col justify-between">
        <div>
          {/* Título principal */}
          <Typography
            variant="h6"
            color="gray"
            className="font-alt font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200"
          >
            {title}
          </Typography>

          {/* Título en inglés */}
          {englishTitle && (
            <Typography
              variant="h8"
              color="gray"
              className="font-alt font-semibold mb-2 border-l-2 pl-2 text-gray-500"
            >
              {englishTitle}
            </Typography>
          )}

          {/* Autores */}
          {authors && authors.length > 0 && (
            <Typography
              variant="small"
              color="gray"
              className="font-medium mb-2"
            >
              {authors.join(", ")}
            </Typography>
          )}

          <div className="flex gap-x-4">
            {/* Última revisión */}
            {lastRevision && (
              <Typography
                variant="small"
                color="gray"
                className="mb-3 text-gray-500"
              >
                Última revisión: {lastRevision}
              </Typography>
            )}

            {/* Categoría */}
            {category && (
              <div>
                <Chip
                  size="sm"
                  variant="outlined"
                  value={category}
                  className="border-blue-300 text-blue-700 bg-blue-50"
                />
              </div>
            )}
          </div>

          {/* Botón principal: Descargar PDF */}
          {mainPDF && (
            <Button
              size="sm"
              variant="outlined"
              color="red"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-50 text-sm font-bold normal-case"
              onClick={() =>
                window.open(getValidUrl(mainPDF.url, mainPDF.type), "_blank")
              }
            >
              <span>Descargar</span>
              <FaFilePdf className="text-red-500 w-5 h-5 align-middle" />
            </Button>
          )}
        </div>

        {/* Recursos secundarios */}
        {resources && resources.length > 0 && (
          <div className="mt-3">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold mb-1 text-gray-600"
            >
              Otros recursos
            </Typography>
            <div className="flex flex-wrap gap-3">
              {resources.map((res) => (
                <Button
                  key={res.url}
                  size="sm"
                  variant="outlined"
                  color="gray"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 text-sm font-medium normal-case"
                  onClick={() =>
                    window.open(getValidUrl(res.url, res.type), "_blank")
                  }
                >
                  <span>{res.label}</span>
                  {res.type === "pdf" && (
                    <FaFilePdf className="text-red-500 w-4 h-4 align-middle" />
                  )}
                  {res.type === "zip" && (
                    <FaFileArchive className="text-yellow-600 w-4 h-4 align-middle" />
                  )}
                  {res.type === "link" && (
                    <FaLink className="text-blue-500 w-4 h-4 align-middle" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
