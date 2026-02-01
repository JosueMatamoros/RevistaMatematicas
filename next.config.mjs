const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/servicios/revistamatematica" : "",
  assetPrefix: isProd ? "/servicios/revistamatematica" : "",
  trailingSlash: true,
};
export default nextConfig;
