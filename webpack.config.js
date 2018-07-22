const path = require('path'); // built-in
const CleanWebpackPlugin = require('clean-webpack-plugin'); // delete folder 
const HtmlWebpackPlugin = require('html-webpack-plugin');   // adds js load code into html 
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 8000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:3100/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
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