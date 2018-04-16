const path = require('path');
module.exports = {
  entry: './src/main/main.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  target: "node",
  resolve: {
    extensions: [ '.ts', '.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}