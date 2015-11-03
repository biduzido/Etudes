var vue = require('vue-loader')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: vue.withLoaders({
        js: 'babel?optional[]=runtime',
        css: ExtractTextPlugin.extract('css!postcss-loader')
      }) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: function () {
    return [autoprefixer]
  },
  devtool: 'source-map'
}
