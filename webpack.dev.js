const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: './src/scripts/app.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/assets')
  }});
