const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'main': './src/index.js'
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/g,
            use: {
                loader: 'url-loader',
                options: {
                    // placehodler 可以是图片打包之后的名字保持不变
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 10000
                }
            }
        },{
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _join: ['lodash', 'join']
        })
    ],
    performance: false,
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports: true,
        splitChunks: {
            chunks: "all", // async-默认异步代码
            minSize: 30000,
            minChunks: 1, // 打包生成的chunks里面有几个引用了lodash,>=2才分割
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'venders'
                },
            default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    output: {
        // publicPath: 'http://cdn.com.cn',
        publicPath: '',
        
        path: path.resolve(__dirname, '../dist')
    }
};