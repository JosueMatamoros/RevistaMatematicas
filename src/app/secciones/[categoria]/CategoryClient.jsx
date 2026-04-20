"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavsComponent from "@/components/home/NavsComponent";
import { withBasePath } from "@/lib/basePath";

const PAGE_SIZE = 10;

export default function CategoryClient({ label, articles }) {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const slice = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <NavsComponent />

      <div className="container mx-auto px-6 py-6">
        <div className="mb-8">
          <Typography
            variant="h4"
            className="font-display font-bold text-tec-blue-primary border-b-2 border-tec-red-primary pb-2 w-fit"
          >
            {label}
          </Typography>
          <p className="text-gray-500 mt-2">
            {articles.length} {articles.length === 1 ? "artículo" : "artículos"}
          </p>
        </div>

        <div className="space-y-4">
          {slice.map((article) => {
            const handleCardClick = () => {
              if (article.slug) router.push(`/${article.slug}`);
            };

            const handlePdf = (e) => {
              e.stopPropagation();
              if (article.pdf) window.open(withBasePath(article.pdf), "_blank");
            };

            const authorsText = Array.isArray(article.authors)
              ? article.authors.map((a) => a.name).join(", ")
              : (article.author ?? "");

            return (
              <Card
                key={`${article.issueId}-${article.id}`}
                onClick={handleCardClick}
                className="group border-l-4 hover:shadow-lg bg-gray-50 transition-all duration-300 hover:border-l-tec-blue-secondary cursor-pointer"
              >
                <CardBody>
                  <div className="flex justify-between items-start gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-alt font-semibold group-hover:text-tec-blue-secondary transition-colors duration-200"
                    >
                      {article.title}
                    </Typography>
                    <Chip
                      size="sm"
                      value={`Vol. ${article.volume}, N° ${article.number}`}
                      className="shrink-0 bg-gray-100 text-gray-600 border border-gray-300"
                    />
                  </div>

                  {article.title_en && (
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-alt font-semibold mt-1 mb-2 border-l-2 pl-2 text-gray-500"
                    >
                      {article.title_en}
                    </Typography>
                  )}

                  <div className="flex items-center gap-3 mt-2">
                    {authorsText && (
                      <Typography variant="small" color="gray" className="font-medium">
                        {authorsText}
                      </Typography>
                    )}
                  </div>

                  {article.pdf && (
                    <Button
                      size="sm"
                      variant="outlined"
                      color="red"
                      className="normal-case mt-3 items-center gap-2 px-4 py-2 rounded-md border border-tec-red-primary text-tec-red-primary hover:bg-red-50 text-sm hidden md:inline-flex"
                      onClick={handlePdf}
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

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              size="sm"
              variant="outlined"
              disabled={page === 1}
              onClick={() => goTo(page - 1)}
              className="normal-case flex items-center gap-1"
            >
              <FaChevronLeft className="w-3 h-3" /> Anterior
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  size="sm"
                  variant={p === page ? "filled" : "outlined"}
                  onClick={() => goTo(p)}
                  className={`normal-case min-w-[36px] ${
                    p === page ? "bg-tec-blue-primary text-white" : ""
                  }`}
                >
                  {p}
                </Button>
              ))}
            </div>

            <Button
              size="sm"
              variant="outlined"
              disabled={page === totalPages}
              onClick={() => goTo(page + 1)}
              className="normal-case flex items-center gap-1"
            >
              Siguiente <FaChevronRight className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
