/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;

const path = require('path');
module.exports.webpack = (config) => {
  config.resolve.alias['utils'] = path.resolve(__dirname, 'app/utils');
  config.resolve.alias['app/blobs/generator'] = path.resolve(__dirname, 'app/blobs/generator.js');
  return config;
};
