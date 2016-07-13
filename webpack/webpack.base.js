var path = require('path');
var rootPath = '../';

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
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: rootPath,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: rootPath,
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.html$/,
        loader: 'vue-html'
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
        loader: 'style!css!sass?sourceMap'
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

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
