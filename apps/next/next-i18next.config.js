const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },
  localePath: path.resolve("./public/static/locales"),
  ns: ["common", "zod"],
};
