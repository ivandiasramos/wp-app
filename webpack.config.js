const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //to access built-in plugins

module.exports = {
   entry: path.join(__dirname, './src/index.ts'),
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
         },
         {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
      ]
   },
   devtool: 'eval-source-map',
   resolve: {
      extensions: [".tsx", ".ts", ".js"]
   },
   plugins: [ 
      new HtmlWebpackPlugin({
         template: './src/index.html'
      }),
      new MiniCssExtractPlugin()
   ],
   watch: true
};
