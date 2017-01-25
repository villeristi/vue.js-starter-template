var argv = require('minimist')(process.argv.slice(2));
var autoprefixer = require('autoprefixer');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

var pkg = require('../package.json');

var isProduction = !!((argv.env && argv.env.production) || argv.p);

/**
 * Common plugins
 * @type {*[]}
 */
var commonPlugins = [
  new HtmlWebpackPlugin({
    inject: 'body',
    template: path.resolve(__dirname, '../src/index.html'),
    favicon: path.resolve(__dirname, '../src/assets/images/favicon.ico')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: isProduction,
    debug: !isProduction,
    stats: { colors: true },
    eslint: {
      configFile: path.resolve(__dirname, '../.eslintrc'),
      failOnWarning: false,
      failOnError: true,
    },
  }),
  new ImageminPlugin({
    disable: false,
    optipng: {
      optimizationLevel: 7,
    },
    gifsicle: {
      optimizationLevel: 3,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    svgo: {
      removeUnknownsAndDefaults: false,
      cleanupIDs: false,
    },
    jpegtran: null,
    plugins: [imageminMozjpeg({
      quality: 75,
    })]
  }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[hash].css',
    allChunks: true,
  }),
];

/**
 * Develop plugins
 * @type {Array.<*>}
 */
var developPlugins = [
  new DashboardPlugin(),
  new WebpackNotifierPlugin({
    title: pkg.name,
    contentImage: path.join(__dirname, '../src/assets/images/logo.png')
  }),
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
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

/**
 * Production plugins
 * @type {Array.<*>}
 */
var productionPLugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new WebpackCleanupPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      drop_console: true,
      warnings: false
    }
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessorOptions: {
      discardComments: {
        removeAll: true
      }
    }
  }),
  new FaviconsWebpackPlugin({
    title: `${pkg.name} - ${pkg.description}`,
    logo: path.resolve(__dirname, '../src/assets/images/logo.png'),
    prefix: 'assets/img/icons/',
    statsFilename: 'iconstats-[hash].json',
    icons: {
      android: true,              // Create Android homescreen icon. `boolean`
      appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset: offsetInPercentage }`
      appleStartup: false,        // Create Apple startup images. `boolean`
      coast: { offset: 25 },      // Create Opera Coast icon with offset 25%. `boolean` or `{ offset: offsetInPercentage }`
      favicons: true,             // Create regular favicons. `boolean`
      firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset: offsetInPercentage }`
      windows: true,              // Create Windows 8 tile icons. `boolean`
      yandex: true                // Create Yandex browser icon. `boolean`
    }
  })
];

module.exports = {
  develop: commonPlugins.concat(developPlugins),
  production: commonPlugins.concat(productionPLugins)
};
