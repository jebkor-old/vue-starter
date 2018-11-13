const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  mode: 'testing',
  output: {
    filename: '[name].min.js'
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new WebpackBundleAnalyzer({
      generateStatsFile: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'testing"
      }
    })
  ]
});
