const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    noParse: /\.min\.js/,
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('./src')
      }
    ],
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}
