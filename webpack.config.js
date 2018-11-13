const webpack = require('webpack');
const path = require('path');

const loaders = require('./webpack/loaders'); // Seperate file with all of the loaders
const plugins = require('./webpack/plugins'); // Seperate file with all of the plugins


if (process.env.NODE_ENV === 'test'){

  module.exports.externals = [require('webpack-node-externals')()]
  module.exports.devtool = 'inline-cheap-module-source-map'

}


module.exports = {
  entry: {
    main: [
      './src/scss/all.scss',
      './src/js/index.js' // main javascript/ts
    ]
  },
  module: {
    rules: [
      loaders.FileLoader,
      loaders.CssLoader,
      loaders.ScssLoader,
      loaders.StylusLoader,
      loaders.JSLoader,
      // loaders.TSLoader,
      loaders.VueLoader
    ]
  },
  resolve: {
    extensions: ['.html', '.scss', '.css', '.js', '.vue', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      Vue$: 'vue/dist/vue.esm.js',
      '@root': path.resolve('./src'),
      '@declarations': path.resolve('./src/ts/declarations'),
      '@models': path.resolve('./src/ts/model'),
      '@services': path.resolve('./src/ts/services'),
      '@types': path.resolve('./src/ts/types'),
      '@utilities': path.resolve('./src/ts/utilities'),
      '@vendor': path.resolve('./src/ts/vendor'),
      '@vue': path.resolve('./src/ts/vue')
    }
  },
  plugins: [
    plugins.VueLoaderPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniExtractPlugin,
    plugins.VuetifyLoaderPlugin
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        }
      }
    }
  }
};