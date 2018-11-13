const path = require('path');
const _VueLoaderPlugin = require('vue-loader/lib/plugin');
const _MiniExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HardSourcePlugin = require('hard-source-webpack-plugin');
const _VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');


const HardSourcePlugin = new _HardSourcePlugin();
const VueLoaderPlugin = new _VueLoaderPlugin();
const MiniExtractPlugin = new _MiniExtractPlugin('[name].css');
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/scss'),
  files: '**/*.scss',
  failOnError: false,
  quiet: false
});
const VuetifyLoaderPlugin = new _VuetifyLoaderPlugin();


module.exports = {
  MiniExtractPlugin: MiniExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  VueLoaderPlugin: VueLoaderPlugin,
  HardSourcePlugin: HardSourcePlugin,
  VuetifyLoaderPlugin: VuetifyLoaderPlugin
};