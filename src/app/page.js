"use client";
import SidebarComponent from "../components/home/SidebarComponent";
import NavsComponent from "../components/home/NavsComponent";
import ArticlesList from "../components/articles/ArticlesList";
import { useState } from "react";
import issueData from "@/data/issues/N1_2025.json";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}

      {/* Contenedor principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Contenido principal */}
        <main className="flex-1 px-4 overflow-y-auto">
          <NavsComponent isSidebarOpen={isSidebarOpen} />
          <ArticlesList
            title={issueData.issueTitle}
            articles={issueData.articles}
          />
        </main>

        {/* Sidebar a la derecha */}
        <SidebarComponent isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </div>
  );
}