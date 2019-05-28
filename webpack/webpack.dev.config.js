const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: "development",
  entry: path.resolve(__dirname, "..", "example/index.js"),
  output: {
    path: path.resolve(__dirname, "..", 'example/dist'),
    publicPath: '/dist/',
    filename: 'example.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "..", "example"),
    publicPath: '/dist/',
    port: 3200
  }
})