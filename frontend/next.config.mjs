/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'drive.google.com'], // Todos los dominios en un solo array
  },
  reactStrictMode: false
};

export default nextConfig;
