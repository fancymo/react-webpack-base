const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

const srcPath = path.resolve(__dirname, '../', 'example');
const distPath = path.resolve(__dirname, '../', 'dist');

module.exports = merge(webpackBaseConfig, {
  target: 'web',
  entry: './index.js',
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: './'
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
