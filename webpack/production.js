const merge = require('webpack-merge');

const webpackBase = require('./webpack.base.js');
const plugins = require('./plugins');

module.exports = merge(webpackBase, {
  plugins: plugins.production,
  performance: {
    hints: 'warning'
  }
});
