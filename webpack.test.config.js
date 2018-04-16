const path = require('path');
//var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/main.spec.ts',
    './src/TestClass/TestClass.spec.ts'
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  target: "node",
  devtool: "source-map", 
  resolve: {
    extensions: [ '.ts', '.js','.spec.ts']
  },
  output: {
    filename: '[name]-test-bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}