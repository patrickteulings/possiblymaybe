const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({ filename: 'app.css' })],
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: '**/node_modules',
    followSymlinks: true,
  },
  entry: {
    main: './src/scripts/app.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/editor-assets')
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {
            encoding: 'base64',
          },
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  devtool: 'source-map',
});
