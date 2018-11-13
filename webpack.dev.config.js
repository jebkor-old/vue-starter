const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const plugins = require('./webpack/plugins');


module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    pathinfo: false
  },
  devtool: 'source-map',
  plugins: [
    plugins.HardSourcePlugin
  ],
  optimization: {
    nodeEnv: "development",
    minimize: false
  }
});
