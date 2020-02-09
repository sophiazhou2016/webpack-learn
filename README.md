# 一步一步手写webpack
> webpack是一个模块打包工具

# 命令
## npx webpack
## webpack
## webpack --watch
## webpack-dev-serve
> contentBase
> open
> proxy

# loader
## css-loader
> 生成css
## style-loader
> 在head里面插入style样式
## sass-loader
> 编译scss文件
## postcss-loader
> postcss.config.js里面配置autoprefixer，用来生成样式前缀
## file-lader
> 可以加载图片，或者字体
> iconfont的使用->阿里iconfont.cn
## url-loader
> 可以设置小图片base64，以减少请求数目，大图片则不，否则文件过大影响加载速度


# plugin
> 在打包的某个时间点操作某个事情
## html-webpack-plugin
> 在dist 文件夹下面生成一个html,并且把打包生成的js自动插入
> 或者把js插入到指定的模板html
> 执行时机：打包之后
## clean-webpack-plugin
> 在打包之前就删除dist文件夹

# entry
## 可以是字符串
## 对象
## 数组

# output
## publicPath
> 打包之后的js的绝对路径
## filename: '[name].js'
> [name]占位符 对应entry里面的key
## path




