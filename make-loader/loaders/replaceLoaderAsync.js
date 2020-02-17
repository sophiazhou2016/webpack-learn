const loaderUtils = require('loader-utils');
module.exports = function(source) { // 注意不要使用箭头函数，this指向会有问题
    console.log('this.query:', this.query);
    const options = loaderUtils.getOptions(this);
    const result = source.replace('Alsa', options.name + ' zhou');
    const callback = this.async();

    setTimeout(() => {
        callback(null, result);
    }, 1000)
};