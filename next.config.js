/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
module.exports = withVideos({
  assetPrefix: 'https://example.com',

  webpack(config, options) {
    return config
  }
})
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        hostname: '*i.ibb.co',

      },
    ],
  },
}

module.exports = nextConfig
