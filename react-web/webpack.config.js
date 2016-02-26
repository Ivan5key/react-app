'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './main.js'
  ],
  plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
  output: {
      path: path.join(__dirname, 'build'),
      //filename: 'bundle.js',
      //publicPath: '/build/',
      pathinfo: true
  },
  resolve: {
        root: path.join(__dirname, 'app'),
        extensions: ['', '.js', '.jsx']
    },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
    }, {
        test: /\.css$/,
        loader: 'style!css'
    }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
    }
    ]
},
externals: {
    // Showdown is not is node_modules,
    // so we tell Webpack to resolve it to a global
    'showdown': 'window.Showdown'
  }
};
