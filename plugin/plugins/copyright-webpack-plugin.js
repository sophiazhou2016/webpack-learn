class CopyrightWebpackPlugin {
    constructor(options){
        console.log('插件被使用了');
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            // console.log(compilation.assets);
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright by dell lee';
                },
                size: function() {
                    return 21;
                }
            };
            cb();
        });
    }
}

module.exports = CopyrightWebpackPlugin;