const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './page/main.js',
    mode : 'production',
    module: {
      rules: [     
        {
          test: /\.vue$/,
          use: {
              loader: 'vue-loader'
          },
          exclude: '/node_modules/'
        },
        {
          test: /\.scss$/,
          // MiniCssExtractPlugin.loader,
          use: [ MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        }
      //   ,
      //   {
      //     test: /\.js$/,
      //     loader: 'babel-loader',
      //     exclude: '/node_modules/'
      // }
      ]
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins:[
      // new webpack.ProvidePlugin({
      //     $:"jquery",
      //     jQuery:"jquery",
      //     "window.jQuery":"jquery"
      // }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({filename:'[name].css'})
      // new UglifyJsPlugin(),
      // new HtmlWebpackPlugin({
      //     filename: 'main.html',
      //     template :  __dirname +'main.html',
      //     minify : {
      //         removeComments : true, //去掉注释
      //         collapseWhitespace : true, //去掉空行
      //     },
      //     inlineSource : '.(js|css)$', //全部内嵌
      //     chunks : ['main']
      // }),
      // new HtmlWebpackPlugin({
      //     filename: 'login.html',
      //     template :  __dirname +'login.html',
      //     minify : {
      //         removeComments : true, //去掉注释
      //         collapseWhitespace : true, //去掉空行
      //     },
      //     inlineSource : '.(js|css)$', //全部内嵌
      //     chunks : ['login']
      // }),
      // new HtmlWebpackInlineSourcePlugin()
  ]
};
