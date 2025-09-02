/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/Articulos/RevistaDigital_V26_n1_2025_Alfaro',
        destination: '/Articulos/V26/N1_2025/alfaro',
      },
      {
        source: '/Articulos/RevistaDigital_V26_n1_2025_Parra',
        destination: '/Articulos/V26/N1_2025/Parra',
      },
      {
        source: '/Articulos/RevistaDigital_V26_n1_2025_Oviedo',
        destination: '/Articulos/V26/N1_2025/Oviedo',
      },
      {
        source: '/Articulos/RevistaDigital_V26_n1_2025_Mosquera',
        destination: '/Articulos/V26/N1_2025/mosquera',
      },
    ]
  },
};

export default nextConfig;
