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

(function () {
    'use strict';
    var div = document.createElement('div');
    var video = document.createElement('video');
    video.style.width = '100%';
    video.style.height = '50px';
    div.style.backgroundColor='rgba(139,233,97,0.80)';
    div.appendChild(video);


    function tmall() {
        let videoSource = document.querySelector('.lib-video>source');
        let playbutton = document.querySelector('.tm-video-play');
        if (!videoSource && playbutton) {
            playbutton.click();
        } else {
            return;
        }
        videoSource = document.querySelector('.lib-video>source');
        let panel = document.querySelector('.tb-gallery');
        video.src=videoSource.src;
        panel.appendChild(div);
    }
    function taobao() {
        let panel = document.querySelector('.tb-item-info-l');
        panel.appendChild(div);
    }
})();