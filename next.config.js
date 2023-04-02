/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }
// next.config.js
module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
}

