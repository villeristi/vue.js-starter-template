var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackBase = require('./webpack.base.js');

module.exports = merge(webpackBase, {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../src/index.html')
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
