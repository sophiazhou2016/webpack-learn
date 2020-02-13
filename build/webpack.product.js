
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
const merge = require('webpack-merge');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.js');


const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
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
    plugins: [
        new MiniCssExtactPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};  

module.exports = merge(commonConfig, prodConfig);