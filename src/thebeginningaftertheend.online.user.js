// ==UserScript==
// @name         Custom css for better reading
// @namespace    https://thebeginningaftertheend.online/
// @version      0.1
// @description
// @author       https://github.com/viller239
// @match        https://thebeginningaftertheend.online/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.collapse.navbar-collapse {
    display: none !important;
}

img.aligncenter {
    margin: 0 auto !important;
    border: none !important;
    border-radius: 0 !important;
}
`);
