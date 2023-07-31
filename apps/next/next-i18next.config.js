const path = require("path")

module.exports = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localePath: path.resolve("./public/static/locales")
  },
}