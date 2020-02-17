class CopyrightWebpackPlugin {
    constructor(options){
        console.log('插件被使用了');
    }

    apply(compiler) {
        compiler.hooks.emit.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('complie');
        });
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            // console.log(compilation.assets);
            debugger;
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