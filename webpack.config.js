const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //to access built-in plugins

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename : "main.[contentHash].js"
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',   // Turns CSS into JS
               'sass-loader'   // Turns SCSS into CSS
            ]
         }
      ]
   },
   plugins: [ 
      new HtmlWebpackPlugin({
         template: './src/index.html'
      }),
      new MiniCssExtractPlugin()
   ],
   watch: true
};
