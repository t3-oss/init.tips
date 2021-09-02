const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy({
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});
