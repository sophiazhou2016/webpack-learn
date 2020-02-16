module.exports = function(source) { // 注意不要使用箭头函数，this指向会有问题
    return source.replace('Alsa', 'Alsa zhou');
};