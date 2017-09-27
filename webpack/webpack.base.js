const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = !!((argv.env && argv.env.production) || argv.p);

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/main.js')]
  },
  output: {
    chunkFilename: '[id].chunk.js',
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    // pathinfo: true
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'src': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.js'
    },
    extensions: ['*', '.js', '.vue', 'html'],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: path.resolve(__dirname, '../src'),
    compress: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.js?$/
      },
      {
        exclude: [/(node_modules)(?![/|\\](bootstrap|foundation-sites))/],
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        }]
      },
      {
        exclude: /node_modules/,
        loader: 'vue-loader',
        test: /\.vue$/
      },
      {
        exclude: /node_modules/,
        loader: 'html-loader',
        test: /\.html$/
      },
      {
        test: /\.css$/,
        loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'cache-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction
              }
            }],
        })),
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src'),
        loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: !isProduction
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            },
          ],
        }))
      },
      {
        test: /\.(png|jpe?g|gif|svg|xml|json)$/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/img/[name].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|eot)$/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/vendor/[name].[ext]',
          },
        },
      },
      {
        test: /\.woff2?$/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: 'assets/vendor/[name].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
        include: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'assets/vendor/[name].[ext]'
          },
        },
      },
    ],
  },
};
