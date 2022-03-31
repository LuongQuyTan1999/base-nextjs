const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");

module.exports = withPlugins([], {
  i18n,
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_APP_ID: process.env.NEXT_APP_ID,
    NEXT_CLIENT_ID: process.env.NEXT_CLIENT_ID,
  },
  images: {
    domains: [],
  },
});
