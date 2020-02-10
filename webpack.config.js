const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    // mode: 'production',
    // devtool: 'cheap-module-source-map',
    entry: {
        'main': './src/index.js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 9000
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // }
    },
    output: {
        // publicPath: 'http://cdn.com.cn',
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
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
            test: /\.(css|scss)$/,
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
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin()]
};  