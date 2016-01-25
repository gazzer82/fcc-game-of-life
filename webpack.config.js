var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index'
  ],
  devtool: 'eval',
  resolve: {
        extensions: [
            '', '.js', '.jsx',
            '.css', '.styl', '.scss', '.less', '.sass'
          ],
          alias: {
          }
  },
  output:{
    path: __dirname + '/dist/js',
    publicPath: '/js',
    filename: "app.js",
    pathinfo: true
  },
  module: {
    loaders:[
      //JSX
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot','babel']
      },
      //JS
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot','babel']
      },
      //SCSS
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style!css!sass'
      },
      //CSS
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      //Fonts
      {
      test: /\.(woff|woff2)$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
      test: /\.ttf$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
      test: /\.eot$/,
        loader: "file"
      },
      //Images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url?limit=25000"
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'underscore-template-loader!./html/index_template.html',
      //favicon: './images/favicon.ico',
      title: 'Game of Life',
      inject: 'body',
      filename: '../index.html'
    })
  ]
}
