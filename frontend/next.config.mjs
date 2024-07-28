/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'drive.google.com',  'user-images.githubusercontent.com'], // Todos los dominios en un solo array
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: false
};

export default nextConfig;
