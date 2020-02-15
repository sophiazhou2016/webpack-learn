const webpack = require('webpack');
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
// const merge = require('webpack-merge');
// const commonConfig = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
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
                    'style-loader', 'css-loader', 'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true
        // hotOnly: true
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin()
    ]
    
};  


module.exports = devConfig;

// presets: [['@babel/preset-env', {
//     targets: {
//         chrome: "67"
//     },
//     useBuiltIns: 'usage'
// }]]

// "plugins": [["@babel/plugin-transform-runtime",
//         {
//             "corejs": 2,
//             "helpers": true,
//             "regenerator": true,
//             "useESModules": false
//         }
//     ]]