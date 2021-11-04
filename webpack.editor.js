const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'none',
  entry: {
    main: './src/scripts/app.editor.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/editor-assets')
  },
});
