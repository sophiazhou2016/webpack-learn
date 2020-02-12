// import '@babel/polyfill';

// import _ from 'lodash';

// console.log(_.join(['a', 'b', 'c'], '***'));
// console.log(_.join(['a', 'd', 'c'], '***'));

function getComponent() {
    return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Dell', 'Lee'], '-');
        return element;
    });
}

getComponent().then(element => {
    document.body.appendChild(element);
});