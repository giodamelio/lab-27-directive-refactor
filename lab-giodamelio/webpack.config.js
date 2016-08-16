const path = require('path');

const ExtractText = require('extract-text-webpack-plugin');

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
        loader: ExtractText.extract('style', ['css', 'sass']),
      },
    ],
  },
  plugins: [
    new ExtractText('bundle.css'),
  ],
};
