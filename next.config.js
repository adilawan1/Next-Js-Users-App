/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["randomuser.me", "localhost"], // <== Domain name
  },
};

module.exports = nextConfig;
