/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["randomuser.me", "localhost"], // <== Domain name
  },
};

module.exports = nextConfig;
