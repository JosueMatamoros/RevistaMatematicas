import HeaderComponent from "./components/HeaderComponent";
import SidebarComponent from "./components/SidebarComponent";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <HeaderComponent />

      {/* Contenedor principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Contenido principal */}
        <main className="flex-1 p-4  overflow-y-auto">
          <h1>Contenido principal</h1>
          
        </main>

        {/* Sidebar a la derecha */}
        <SidebarComponent />
      </div>
    </div>
  );
}
