var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('../package.json').config;
var webpackBase = require('./webpack.base.js');

module.exports = merge(webpackBase, {
  devtool: '#eval-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: config.port,
        // Proxy the default webpack dev-server port
        proxy: 'http://localhost:8080/',
        notify: false,
        open: false,
        // Let webpack handle the reload
        codeSync: false
      }
    ),

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
