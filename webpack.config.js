'use strict';

const path = require('path');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';

const config = {
  mode: env,
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {},
  devtool: sourceMap ? `cheap-module-eval-source-map` : undefined,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'app')],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = config;
