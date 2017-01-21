var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

var pkg = require('../package.json');
var webpackBase = require('./webpack.base.js');

module.exports = merge(webpackBase, {
  devtool: '#eval-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: pkg.config.port,
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

    new WebpackNotifierPlugin({
      title: pkg.name,
      contentImage: path.join(__dirname, '../src/assets/images/logo.png')
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
