
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
// const merge = require('webpack-merge');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const commonConfig = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].[contenthash]js',
        chunkFilename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtactPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtactPlugin.loader, 
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    plugins: [
        new MiniCssExtactPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
};  

module.exports = prodConfig;