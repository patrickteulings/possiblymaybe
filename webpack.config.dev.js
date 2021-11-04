const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');


module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: './src/scripts/app.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/assets')
  }});
