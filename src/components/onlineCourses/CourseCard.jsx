"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function CourseCard({
  title = "Cursos en línea",
  title_en = "Online Courses",
  authors = "",
  link
}) {
  const router = useRouter();

  const handleCardClick = () => {
    if (link) router.push(link);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="group border-l-4 hover:shadow-lg bg-gray-50 transition-all duration-300 hover:border-l-tec-blue-secondary mb-6 cursor-pointer"
    >
      <CardBody>
        <Typography
          variant="h6"
          color="blue-gray"
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

        <div className="flex items-center gap-3 mb-3">
          {authors && (
            <Typography
              variant="small"
              color="gray"
              className="font-medium"
            >
              {authors}
            </Typography>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
