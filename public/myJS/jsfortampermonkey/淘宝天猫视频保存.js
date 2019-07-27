// ==UserScript==
// @name         淘宝天猫视频保存
// @namespace    xxx
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        taobao.com
// @match        tmall.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var div=document.createElement('div');
    var button=document.createElement('input');
    button.type='button';
    button.value='视频另存为';
    button.id='videosave';
    div.appendChild(button);
    var panel=document.querySelector('.tb-gallery');
    panel.appendChild(div);
        // Your code here...
        })();