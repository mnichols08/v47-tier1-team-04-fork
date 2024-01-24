const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "eval-source-map",
    module: {
        rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
             test: /\.(s(a|c)ss)$/,
             use: ['style-loader','css-loader', 'sass-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Daily Tasks App',
            myPageHeader: 'Daily Tasks App',
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        })
   ]
};