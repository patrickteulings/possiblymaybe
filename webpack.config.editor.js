const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');


module.exports = merge(common, {
  mode: 'none',
  entry: {
    main: './src/scripts/app.editor.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/assets-editor')
  },
});
