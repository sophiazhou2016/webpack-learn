
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
};  

module.exports = merge(commonConfig, prodConfig);