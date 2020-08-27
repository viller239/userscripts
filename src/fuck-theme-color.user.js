  
// ==UserScript==
// @name         Fuck theme color
// @namespace    https://github.com/viller239
// @version      0.3
// @description  Deleteing custom theme color from websites
// @author       https://github.com/viller239
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

const el = document.createElement('meta');
el.setAttribute('name', 'theme-color');
el.setAttribute('content', 'rgba(0,0,0,0)');
if (document.head) document.head.appendChild(el);
