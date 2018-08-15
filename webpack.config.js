var webpack = require('gulp-webpack').webpack
var path = require('path')
var current = process.cwd()           

console.log(path.join(process.cwd(), '/app/'))

module.exports = {
  entry:{
    main: './app/assets/coffee/router.coffee'
  },

  output:{
    filename: "[name].bundle.js"
  },
    //出力するファイル名                                       o
  resolve: {                                                  
    extensions: ['', '.js', '.coffee'], //requireする際に、拡張子を省略するための設定                        
    root: path.join(current, '/app/'), //require時にファイルを検索する際のrootパス   
    alias: {
      // template: current + '/app/template/'
    }            
  },
  module:{
    loaders: [                                           
      {test: /\.coffee$/, loader: 'babel-loader!coffee-loader'},//coffeescriptをコンパイルするための設定
      {test: /\.html$/, loader: 'html?minimize'}
    ],
    options: {
      presets: ['es2015']
    }
  },
  plugins: [
      // new webpack.optimize.UglifyJsPlugin(),
  ]
}