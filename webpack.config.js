const path = require('path');
const ExtractTextPlugin =require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin'); 
//const stylus_plugin = require('stylus_plugin');
let extractHtml = new ExtractTextPlugin('index.html');
let extractStyle= new ExtractTextPlugin('style.css');
module.exports = {
  entry:'./src/script/index.coffee',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[{
      test:/\.styl$/,
      use:extractStyle.extract({loader:['css-loader',
        {
          loader:'stylus-loader',
 //         options:{use:[stylus_plugin()]}
        }
      ]})
    },{
      test:/\.pug$/,
      use:extractHtml.extract({loader:['html-loader','pug-html-loader']})
    },{
      test:/\.coffee$/,
      use:['coffeescript-loader']
    }]
  },plugins:[extractHtml,extractStyle,new LiveReloadPlugin()]
};

