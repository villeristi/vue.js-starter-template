var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {

  entry: {
    app: [path.resolve(__dirname, '../src/main.js')]
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  resolve: {
    extensions: ['', '.js', '.html'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.js'
    }
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.html$/,
        loader: 'html'
      },

      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?prefix=img/&limit=5000'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass?sourceMap'
      },

      {
        test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
      }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  postcss: function () {
    return [autoprefixer];
  }
};
