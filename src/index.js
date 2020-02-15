import _ from 'lodash';
import $ from 'jquery';
import ui from './ui.js';
ui();

const dom = $('div');
dom.html(_.join(['Dell', 'Lee'], '***'));
$('body').append(dom);

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('service-worker registed');
        }).catch(err => {
            console.log('service-worker err');
        });
    });
}