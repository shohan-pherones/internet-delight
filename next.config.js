/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "randomuser.me", "techcrunch.com"],
  },
};

module.exports = nextConfig;
