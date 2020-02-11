const webpack = require('webpack');
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
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
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    }
};  


module.exports = merge(commonConfig ,devConfig);

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