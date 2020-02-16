import _ from 'lodash';
import $ from 'jquery';
import ui from './ui.js';
import axios from 'axios';

import click from '~/click';
click();

axios.get('/react/api/header.json').then(res => {
    console.log('axois get:', res);
});
ui(z);

const dom = $('div');
dom.html(_.join(['Dell', 'Lee'], '***'));
$('body').append(dom);

// if('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('service-worker registed');
//         }).catch(err => {
//             console.log('service-worker err');
//         });
//     });
// }

