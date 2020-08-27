  
// ==UserScript==
// @name         Fuck theme color
// @namespace    https://github.com/viller239
// @version      0.1
// @description  Deleteing custom theme color from websites
// @author       https://github.com/viller239
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

Array.from(document.querySelector('meta[name="theme-color"]'))
  .forEach((el) => el.parentNode.removeChild(el));
