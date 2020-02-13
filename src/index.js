// import '@babel/polyfill';

// import _ from 'lodash';
// var element = document.createElement('div');
// element.innerHTML = _.join(['Dell', 'Lee'], '-');
// document.body.appendChild(element);

// console.log(_.join(['a', 'b', 'c'], '***'));
// console.log(_.join(['a', 'd', 'c'], '***'));

// async function getComponent() {
//     const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element;
// }

document.addEventListener('click',() => {
    import(/* webpackPrefetch: true */'./click').then(({default: func}) => {
        func();
    });

    // getComponent().then(element => {
    //     document.body.appendChild(element);
    // });
});

