const path = require('path');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
module.exports = {
  entry: './src/main.ts',
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
  },

  plugins: [
    new TypedocWebpackPlugin(
      {
        out:'../docs',
        exclude:['**/node_modules/**/*.*','**/*.spec.ts']
      })
  ]
}