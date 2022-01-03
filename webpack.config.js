const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const pkg = require('./package')
const DEV_PORT = process.env.PORT || 4444
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
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
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: __dirname
      }
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    // new ESLintPlugin({
    //   extensions: ['.tsx', '.ts', '.js'],
    //   exclude: 'node_modules'
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    open: false,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
  }
}
