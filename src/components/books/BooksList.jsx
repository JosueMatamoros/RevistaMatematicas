"use client";

import React from "react";
import Link from "next/link";
import { Typography, Button, Chip } from "@material-tailwind/react";
import { FaFilePdf, FaFileArchive, FaLink } from "react-icons/fa";
import { withFullUrl } from "@/lib/basePath";
import Image from "next/image";

export default function BooksList({
  id,
  coverImage,
  title,
  title_en,
  authors,
  lastRevision,
  pdf,
  resources,
  category,
}) {
  const getValidUrl = (url, type) => {
    if (typeof url !== "string" || url.length === 0) return "";

    const t = String(type || "").trim().toLowerCase();
    const isAbsolute = url.startsWith("http://") || url.startsWith("https://");

    if (t === "zip") {
      if (isAbsolute) return url;
      if (url.startsWith("/")) return url;
      return `/${url}`;
    }

    if (!isAbsolute && t === "pdf") return url;

    if (isAbsolute && t === "link") return url;

    return withFullUrl(url);
  };

  const formattedAuthors =
    authors && authors.length > 0
      ? authors.map((a) => (typeof a === "string" ? a : a?.name)).join(", ")
      : "";

  const openAsAnchor = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const openPdf = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const url = getValidUrl(pdf, "pdf");
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openResource = (e, res) => {
    e.preventDefault();
    e.stopPropagation();

    const type = String(res?.type || "").trim().toLowerCase();
    const url = getValidUrl(res?.url, type);
    if (!url) return;

    if (type === "zip") {
      console.log(url);
      openAsAnchor(url);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Link
      href={`/libros/${id}`}
      className="group flex flex-col md:flex-row bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border-l-4 hover:border-l-tec-blue-secondary"
    >
      <div className="md:w-1/4 p-4 flex justify-center items-center ">
        <Image
          src={coverImage}
          alt={title}
          className="object-contain w-full max-h-64 aspect-[3/4]"
          width={300}
          height={400}
        />
      </div>

      <div className="md:w-3/4 p-6 flex flex-col justify-between">
        <div>
          <Typography
            variant="h6"
            color="gray"
            className="font-alt font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200"
          >
            {title}
          </Typography>

          {title_en && (
            <Typography
              variant="h8"
              color="gray"
              className="font-alt font-semibold mb-2 border-l-2 pl-2 text-gray-500"
            >
              {title_en}
            </Typography>
          )}

          {formattedAuthors && (
            <Typography
              variant="small"
              color="gray"
              className="font-medium mb-2"
            >
              {formattedAuthors}
            </Typography>
          )}

          <div className="flex gap-x-4 items-center">
            {lastRevision && (
              <Typography
                variant="small"
                color="gray"
                className=" text-gray-500"
              >
                Última revisión: {lastRevision}
              </Typography>
            )}

            {category && (
              <Chip
                size="sm"
                variant="outlined"
                value={category}
                className="border-blue-300 text-blue-700 bg-blue-50"
              />
            )}
          </div>

          {pdf && (
            <div
              className="mt-3"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Button
                size="sm"
                variant="outlined"
                color="red"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-50 text-sm font-bold normal-case"
                onClick={openPdf}
              >
                <span>Descargar</span>
                <FaFilePdf className="text-red-500 w-5 h-5 align-middle" />
              </Button>
            </div>
          )}
        </div>

        {Array.isArray(resources) && resources.length > 0 && (
          <div
            className="mt-3"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Typography
              variant="small"
              color="gray"
              className="font-semibold mb-1 text-gray-600"
            >
              Otros recursos
            </Typography>

            <div className="flex flex-wrap gap-3 ">
              {resources.map((res) => {
                const type = String(res?.type || "").trim().toLowerCase();

                if (type === "zip") {
                  return (
                    <Button
                      key={`${type}-${res?.url}`}
                      size="sm"
                      variant="outlined"
                      className="flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2 rounded-md border border-yellow-500 text-yellow-700 hover:bg-yellow-50 text-sm font-medium normal-case"
                      onClick={(e) => openResource(e, res)}
                    >
                      <span className="hidden md:block">Descargar </span>
                      <span>ZIP</span>
                      <FaFileArchive className="text-yellow-600 w-4 h-4 align-middle" />
                    </Button>
                  );
                }

                return (
                  <Button
                    key={`${type}-${res?.url}`}
                    size="sm"
                    variant="outlined"
                    color="gray"
                    className="flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 text-sm font-medium normal-case"
                    onClick={(e) => openResource(e, res)}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof res?.label === "string" && res.label.includes("CDF")
                            ? res.label.replace(
                                "CDF",
                                `CDF <br class='block sm:hidden' />`
                              )
                            : res?.label || "",
                      }}
                    />
                    {type === "pdf" && (
                      <FaFilePdf className="text-red-500 w-4 h-4 align-middle" />
                    )}
                    {type === "link" && (
                      <FaLink className="text-blue-500 w-4 h-4 align-middle" />
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
