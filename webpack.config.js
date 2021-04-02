const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        ),
        new CopyWebpackPlugin(
            {
                patterns: 
                 [
                    {
                        from: 'public',
                        to: 'dist'
                    }
                ]
            }
        ),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        })
    ],
    devServer: {
        port: 8081,
        historyApiFallback: true
    },
    devtool: "source-map"
}