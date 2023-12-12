/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow image from other server
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://loremflickr.com/',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
