/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        // Send the apex domain to www so every page has a single host
        source: "/:path*",
        has: [{ type: "host", value: "easy-sprayaway.co.uk" }],
        destination: "https://www.easy-sprayaway.co.uk/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
