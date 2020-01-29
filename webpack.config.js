var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  target: 'node',
  
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
