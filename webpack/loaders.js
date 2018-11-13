const MiniExtractPlugin = require('mini-css-extract-plugin');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      '@babel/env'
    ],
    plugins: [
      'transform-es2015-shorthand-properties',
      '@babel/plugin-syntax-dynamic-import'
    ]
  }
};

// const TSLoader = {
//   test: /\.ts$/,
//   loader: 'ts-loader',
//   options: {
//     transpileOnly: true,
//     happyPackMode: true,
//     appendTsSuffixTo: [/\.vue$/]
//   }
// };

const VueLoader = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      scss: 'style-loader!MiniExtractPlugin.loader!css-loader?minimize=true!postcss-loader?path=./postcss.config.js!sass-loader',
      js: 'babel-loader',
      css: 'style-loader!css-loader'
    }
  }
};

const CssLoader = {
  test: /\.(css)$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: true
      }
    }    
  ]
};

const ScssLoader = {
  test: /\.(sass|scss)$/,
  use: [
    'style-loader',
    MiniExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    },
    'sass-loader'
  ]
};

const StylusLoader = {
  test: /\.(stylus|styl)$/,
  use: [
    'style-loader',
    MiniExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    },
    'stylus-loader'
  ]
};

const FileLoader = {
  test: /\.(png|svg|jpg|jpeg|gif)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  }]
};

module.exports = {
  JSLoader: JSLoader,
  // TSLoader: TSLoader,
  VueLoader: VueLoader,
  CssLoader: CssLoader,
  ScssLoader: ScssLoader,
  FileLoader: FileLoader,
  StylusLoader: StylusLoader
};