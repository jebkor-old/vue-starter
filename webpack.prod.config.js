const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: '[name].min.js'
  },
  stats: {
    entrypoints: false,
    children: false
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    nodeEnv: "production",
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  }
});
