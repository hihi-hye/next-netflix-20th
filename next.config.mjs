/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  },
};

export default nextConfig;
