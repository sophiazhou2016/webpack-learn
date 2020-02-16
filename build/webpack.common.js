/* eslint-disable no-undef */
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.product.js');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const makePlugins = (configs) => {
    const plugins = [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _join: ['lodash', 'join']
        })];
    Object.keys(configs.entry).forEach(item => {
        console.log('item:', item);
        plugins.push(new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: `${item}.html`,
            chunks: ['runtime', 'venders', item]
        }));
    });

    const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
    files.forEach(file => {
        if(/.*\.dll.js/.test(file)) {
            plugins.push(new AddAssetHtmlWebpackPlugin({
                filepath: path.resolve(__dirname, '../dll', file)
            }));
        }
        if(/.*\.manifest.js/.test(file)) {
            plugins.push(new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, '../dll', file)
            }));
        }
    });
    return plugins;
};
// const plugins = [
//     new HtmlWebpackPlugin({
//         template: 'src/index.html'
//     }),
//     new webpack.ProvidePlugin({
//         $: 'jquery',
//         _join: ['lodash', 'join']
//     })
// ];


const commonConfig = {
    entry: {
        'index': './src/index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '~': path.resolve(__dirname, '../src')
        }
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
            loader: ['babel-loader', 'eslint-loader']
        }]
    },
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

commonConfig.plugins = makePlugins(commonConfig);

module.exports = (env) => {
    if(env && env.production) {
        return merge(commonConfig, prodConfig);
    }else {
        return merge(commonConfig, devConfig);
    }
};