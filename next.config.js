/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },

      "browser": {
        "tls": false,
        "net": false,
      }
}

module.exports = nextConfig
