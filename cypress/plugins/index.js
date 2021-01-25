/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

const {
  startDevServer,
} = require("../../../../github/cypress/npm/webpack-dev-server");
const webpackConfig = require("@vue/cli-service/webpack.config.js");

module.exports = (on, config) => {
  on("dev-server:start", (options) =>
    startDevServer({ options, webpackConfig })
  );
  return config;
};
