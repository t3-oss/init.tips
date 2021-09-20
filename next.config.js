const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  target: "serverless",
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
