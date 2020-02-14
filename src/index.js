import _ from 'lodash';
import $ from 'jquery';
import ui from './ui.js';
ui();

const dom = $('div');
dom.html(_.join(['Dell', 'Lee'], '***'));
$('body').append(dom);