// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: false,
        silent: true
      })
    ]

    return config
  }
}