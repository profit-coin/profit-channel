const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const svgrWebpackConfig = require('./svgr.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: svgrWebpackConfig,
  reactStrictMode: true,
  i18n,
};

module.exports = withBundleAnalyzer(nextConfig);
