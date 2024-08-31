/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'github.com',
      'drive.google.com',
      'user-images.githubusercontent.com',
    ],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: false
};

export default nextConfig;
