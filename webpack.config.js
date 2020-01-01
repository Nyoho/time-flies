const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const pkg = require('./package')
const DEV_PORT = process.env.PORT || 4444

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
    ],
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin({ filename: 'style.css' })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
