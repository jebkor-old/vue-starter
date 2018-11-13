const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  entry: {
        initializer: ["./src/js/initializer.js"],
        index: ["./src/js/views/index.js"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        loaders: {
          scss: "style-loader!css-loader!sass-loader",
          js: "babel-loader",
          css: "style-loader!css-loader"
        }
      }
    }, {
      test: /\.scss$/,
      loader: "style-loader!css-loader!sass-loader"
    }]
  },
  resolve: {
    extensions: [".html", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      Vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new VueLoaderPlugin()
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
}