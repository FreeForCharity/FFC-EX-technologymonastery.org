// Next reads this file as CommonJS, so require() is required here.
/* eslint-disable-next-line @typescript-eslint/no-require-imports */
const { basePath } = require('./lib/base-path.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
