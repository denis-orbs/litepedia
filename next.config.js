/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
