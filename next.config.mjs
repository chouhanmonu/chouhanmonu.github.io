/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 100],
  },
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required: Next.js Image optimization needs a server
  },
  trailingSlash: true, // Helps with routing on GitHub Pages
};

export default nextConfig;
