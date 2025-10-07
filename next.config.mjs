const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/servicios/revistamatematica/pruebas" : "",
  assetPrefix: isProd ? "/servicios/revistamatematica/pruebas" : "",
  trailingSlash: true, 
};
export default nextConfig;
