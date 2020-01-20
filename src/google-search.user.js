// ==UserScript==
// @name         Better google search results
// @namespace    https://www.google.com
// @version      0.1
// @description
// @author       https://github.com/viller239
// @match        https://*.google.com/search*q=*
// @grant        GM_addStyle
// ==/UserScript==

// TODO: find better place for "Cached"

GM_addStyle(`
/* hide new url with favicon and linebreak after */
.r > a > .TbwUpd,
.r > a > .TbwUpd + br {
    display: none;
}
.r > a > h3 {
    padding: 0;
    margin: 0;
}

/* display url under the page title */
.r > a:after {
    content: attr(href);
    display: block;
    color: rgb(0, 102, 33);
    font-size: 13px;
    font-style: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

/* hide right side dropdown toggle */
.r > .B6fmyf .ab_button {
    display: none;
}

/* make dropdown always visible */
.r > .B6fmyf .action-menu-panel {
    visibility: visible;
}

/* hide items in dropdown that are not "cached" */
.r > .B6fmyf .fl:not([href^="https://webcache"]) {
    display: none;
}

/* make dropdown look like a link */
.r > .B6fmyf {
    position: absolute;
    right: 0;
    top: -12px; /* allign with title */
}
.r > .B6fmyf .ab_dropdown {
    border: none;
    background: none;
    box-shadow: none;
}
.r > .B6fmyf .ab_dropdownitem:hover {
    cursor: default;
    background: none;
}
.r > .B6fmyf .action-menu-item a.fl {
    padding: 0;
    color: rgb(119, 119, 119);
}
`);
