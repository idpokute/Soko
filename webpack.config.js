const path = require('path'); // built-in
const CleanWebpackPlugin = require('clean-webpack-plugin'); // delete folder 
const HtmlWebpackPlugin = require('html-webpack-plugin');   // adds js load code into html 


module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map', // it seems it's not working
  devServer: {
    port: 8000,
    inline: true,
    overlay: true,
    contentBase: './'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      inject: true,
      template: path.resolve(__dirname, 'index.html'),  // we will use existing file. 
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};