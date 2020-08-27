  
// ==UserScript==
// @name         Fuck theme color
// @namespace    https://github.com/viller239
// @version      0.4
// @description  Deleteing custom theme color from websites
// @author       https://github.com/viller239
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

const el = document.querySelector('meta[name="theme-color"]');
if (el) el.setAttribute('content', '');
