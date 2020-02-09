// ES Module 引入方式
// CommonJs 模块引入规范
// CMD
// AMD

// webpack 模块打包工具
import Header from './Header.js'; // 模块
import Sidebar from './Sidebar.js';
import Content from './Content.js';
import avatar from './avatar.jpg';
import style from './index.scss';

import createAvatar from './createAvatar';
createAvatar();

var img = new Image();
img.src = avatar;
// img.classList.add('avatar');
img.classList.add(style.avatar);
var root = document.getElementById('root');
root.append(img);
console.log(avatar);

new Header();
new Sidebar();
new Content();