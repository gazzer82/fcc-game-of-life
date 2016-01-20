var webpack = require('webpack');
var express = require('express');
var path = require('path');
var app = express();

var isDevelopmentENV = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'dist');

if(!isDevelopmentENV){
  app.use(express.static(static_path))
  .get('/', function (req, res){
    res.sendFile('index.html',{
      root: static_path
    });
  }).listen(process.env.PORT || 8080, function (err){
    if (err) { console.log(err)};
    console.log('Listening at localhost:8080');
  });
} else {
  if(isDevelopmentENV) {

    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config');

    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      contentBase: static_path,
      hot: true,
      historyApiFallback: true,
      devtool: 'eval-source-map',
      output: {
        pathinfo: true
      }
    }).listen(3000, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      }

      console.log('Listening at localhost:3000');
    });
  }
}
