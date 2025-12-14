import BreadcrumbNav from "@/components/articles/BreadcrumbNav";
import NavsComponent from "@/components/home/NavsComponent";

export default function ArticlesLayout({ children }) {
  return (
    <div className="bg-white min-h-svh">
      {/* zona para breadcrumbs */}
      <BreadcrumbNav />
        <NavsComponent />


      {/* contenido real */}
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}
