var path = require('path');
var webpack = require('webpack');
//let NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client",
        "babel-polyfill",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        //new NpmInstallPlugin(),
        
    ],
    module: {
        rules: [
            {
                enforce:"pre",
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}