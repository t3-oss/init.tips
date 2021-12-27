/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://plausible.io/js/plausible.js",
        locale: false,
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
        locale: false,
      },
    ];
  },
});
