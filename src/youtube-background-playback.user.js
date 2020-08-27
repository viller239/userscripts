// ==UserScript==
// @name         Mobile youtube background playback
// @namespace    https://youtube.com
// @version      0.1
// @description  Allow youtube playback in the background on mobile
// @author       https://github.com/viller239
// @match        *://*.youtube.com/*
// @match        *://*.youtube-nocookie.com/*
// @grant        GM_addStyle
// ==/UserScript==

Object.defineProperty(window.Document.prototype, 'hidden', {
    enumerable: true,
    configurable: true,
    get: () => false,
});

Object.defineProperty(window.Document.prototype, 'visibilityState', {
    enumerable: true,
    configurable: true,
    get: () => 'visible',
});

window.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);

(function overrideLastActivity() {
    if ('_lact' in window.wrappedJSObject) {
        Object.defineProperty(window.wrappedJSObject, '_lact', {
            enumerable: true,
            configurable: true,
            set: () => Date.now(),
            get: () => Date.now(),
        });
    }
    setTimeout(overrideLastActivity, 1000);
}());
