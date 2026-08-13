/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // auto convert to modern fast formats
    deviceSizes: [640, 750, 828, 1080, 1200], // only generate needed sizes
    imageSizes: [380, 440], // card sizes
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache 30 days
  },
};

module.exports = nextConfig;