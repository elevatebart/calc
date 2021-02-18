/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

const webpackConfig = require("@vue/cli-service/webpack.config.js");

module.exports = (on, config) => {
  require("@cypress/vue/dist/plugins/webpack")(on, config, webpackConfig)
  return config;
};
