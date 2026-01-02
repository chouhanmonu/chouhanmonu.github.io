/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    qualities: [75, 100],
    unoptimized: true, // Required: Next.js Image optimization needs a server
  },
  trailingSlash: true, // Helps with routing on GitHub Pages
  // reactStrictMode: false,
};

export default nextConfig;
