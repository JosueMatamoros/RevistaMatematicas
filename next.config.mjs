const isProd = process.env.NODE_ENV === "production";

const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath = envBasePath
  ? `/${envBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? normalizedBasePath : "",
  assetPrefix: isProd ? normalizedBasePath : "",
  trailingSlash: true,
};
export default nextConfig;
