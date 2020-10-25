// ==UserScript==
// @name         Loops mobile youtube playback
// @namespace    https://github.com/viller239
// @version      0.1.1
// @description  Presses "repeat" button as soon as it becomes visible
// @updateURL    https://viller239.github.io/userscripts/src/mobile-youtube-autorepeat.user.js
// @downloadURL  https://viller239.github.io/userscripts/src/mobile-youtube-autorepeat.user.js
// @author       https://github.com/viller239
// @match        *://m.youtube.com/*
// @run-at       document-end
// ==/UserScript==

(function check() {
    document.querySelector('.html5-endscreen:not([style*="none"]) .ytp-mweb-endscreen-replay')?.click();
    setTimeout(check, 250);
}());
