const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: "production",
  entry: path.resolve(__dirname, "..", "src/index.js"),
  output: {
    path: path.resolve(__dirname, "..", 'dist'),
    filename: 'main.js'
  }
})
