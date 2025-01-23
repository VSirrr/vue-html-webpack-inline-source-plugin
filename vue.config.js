const { defineConfig } = require("@vue/cli-service");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].inlineSource = "(app|chunk-vendors).*css$";
      return args;
    });
  },
  configureWebpack: {
    plugins: [new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)],
  },
});
