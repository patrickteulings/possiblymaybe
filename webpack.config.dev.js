const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');


module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: './src/scripts/app.ts'
  },
  // output: {
  //   filename: 'app.js',
  //   path: path.resolve(__dirname, 'dist/assets')
  // },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/assets')
  }

})
