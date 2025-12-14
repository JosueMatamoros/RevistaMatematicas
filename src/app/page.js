"use client";
import SidebarComponent from "../components/home/SidebarComponent";
import NavsComponent from "../components/home/NavsComponent";
import ArticlesList from "../components/articles/ArticlesList";
import { useState, useEffect } from "react";
import issueData from "@/data/issues/V26_N1_2025.json";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-open");
    if (saved !== null) {
      setIsSidebarOpen(saved === "true");
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("sidebar-open", isSidebarOpen);
    }
  }, [isSidebarOpen, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 px-4 overflow-y-auto">
          <NavsComponent isSidebarOpen={isSidebarOpen} />
          <ArticlesList
            title={issueData.issueTitle}
            articles={issueData.articles}
          />
        </main>

        <SidebarComponent
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
      </div>
    </div>
  );
}
