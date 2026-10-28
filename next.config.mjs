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
      {
        // Behind Firebase App Hosting the public domain arrives in x-forwarded-host
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-host", value: "easy-sprayaway.co.uk" }],
        destination: "https://www.easy-sprayaway.co.uk/:path*",
        permanent: true,
      },
      {
        // Some Firebase setups pass the requested domain in x-fh-requested-host instead
        source: "/:path*",
        has: [{ type: "header", key: "x-fh-requested-host", value: "easy-sprayaway.co.uk" }],
        destination: "https://www.easy-sprayaway.co.uk/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
