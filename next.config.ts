import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for cPanel/shared hosting: `npm run build` writes the
  // whole site to `out/`, which is uploaded as-is to public_html.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
