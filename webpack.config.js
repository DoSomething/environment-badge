const configure = require('@dosomething/webpack-config');
const path = require('path');

module.exports = configure({
  entry: {
    bundle: './src/register.js',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
});
