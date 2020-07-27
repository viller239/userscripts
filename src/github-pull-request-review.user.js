// ==UserScript==
// @name         Reminder to submit pull request review on github
// @namespace    https://github.com
// @version      0.1.1
// @description
// @author       https://github.com/viller239
// @match        https://*.github.com/*/pull/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
[data-pending-message="Finish your review"]:after,
.is-pending.is-writer:after {
    content: 'SUBMIT REVIEW';
    position: fixed;
    left: 0;
    right: 0;
    background: red;
    top: 0;
    text-align: center;
    font-size: 46px;
    height: 50px;
    line-height: 50px;
    z-index: 100;
}
`);
