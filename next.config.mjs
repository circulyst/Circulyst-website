/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Add this line for static export
  trailingSlash: true, // Optional: helps with static hosting
}

export default nextConfig
