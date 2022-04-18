/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withReactSvg = require('next-react-svg');
const withPlugins = require('next-compose-plugins');
const path = require('path');

module.exports = withPlugins(
  [
    [
      withReactSvg,
      {
        include: path.resolve(__dirname, 'public/assets/svgs/'),
        webpack(config) {
          return config;
        },
      },
    ],
    [withBundleAnalyzer],
  ],
  {
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    reactStrictMode: true,
  }
);
