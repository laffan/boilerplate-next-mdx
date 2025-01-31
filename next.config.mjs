/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  // output: "export", - uncomment for static export
  // trailingSlash: true,  - uncomment for static export
};

export default nextConfig;
