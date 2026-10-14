import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/stock-audit",
        destination: "/services/inventory-audit",
        permanent: true,
      },
      {
        source: "/services/foreign-company-incorporation",
        destination: "/services/india-entry",
        permanent: true,
      },
      {
        source: "/services/capital-markets",
        destination: "/services/ipo-advisory",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
