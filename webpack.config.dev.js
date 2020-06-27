const path = require('path');

module.exports = {

  devtool: 'inline-source-map',
  //noInfo: false,
  entry: [
    path.resolve(__dirname, '/src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    debug: true,
    noInfo: false
  },
  mode:'none',
  plugins: [],
  module: {
    rules: [
      {loaders: ['babel', 'style','css']},
      {test: [/\.js$/,  /\.css$/]},
      {exclude: /node_modules/}
    ]
  }

}
