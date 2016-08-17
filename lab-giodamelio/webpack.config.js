const path = require('path');

const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: 'build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', ['css', 'postcss', 'sass']),
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
  postcss() {
    return [autoprefixer];
  },
  plugins: [
    new ExtractText('bundle.css'),
  ],
};
