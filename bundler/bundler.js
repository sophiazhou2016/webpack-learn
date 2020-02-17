const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8');
    const ast = parser.parse(content, {
        sourceType: 'module'
    });

    const dependencies = {};
    traverse(ast, {
        ImportDeclaration({node}) {
            const dirname = path.dirname(filename);
            // console.log('dirname:', dirname);
            const newFile = './' + path.join(dirname, node.source.value);
            dependencies[node.source.value] = newFile;
        }
    });
    // console.log(dependencies);
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    });
    // console.log(code);
    return {
        filename,
        dependencies,
        code
    };

};

// const makeDependenciesGraph = (entry) => {
    
// };

const moduleInfo = moduleAnalyser('./src/index.js');
console.log(moduleInfo);