"use client";
import HeaderComponent from "./components/home/HeaderComponent";
import SidebarComponent from "./components/home/SidebarComponent";
import NavsComponent from "./components/home/NavsComponent";
import RecentArticlesComponent from "./components/home/RecentArticlesComponent";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <HeaderComponent />

      {/* Contenedor principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Contenido principal */}
        <main className="flex-1 p-4  overflow-y-auto">
          <NavsComponent isSidebarOpen={isSidebarOpen} />
          <RecentArticlesComponent />
        </main>

        {/* Sidebar a la derecha */}
        <SidebarComponent isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </div>
  );
}
