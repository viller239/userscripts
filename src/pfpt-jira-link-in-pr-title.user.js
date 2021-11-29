// ==UserScript==
// @name         Replaces Jira ticket name in PR title with jira link
// @namespace    https://github.com
// @version      0.1.7
// @description
// @author       https://github.com/viller239
// @match        https://*.github.com/weblifeio/*/pull*
// @run-at       document-idle
// ==/UserScript==
(function addLink() {
    Array.from(document.querySelectorAll('.js-issue-title'))
        .filter((el) => !el.querySelector('a[href~="jira.proofpoint"]'))
        .map((el) => ([el, el.innerText.match(/(\[?ISO[-\s]*(\d+)\]?)/i)]))
        .filter(([, match]) => match && match[2])
        .forEach(([el, match]) => {
            const t = el.innerText;
            el.innerHTML = `${t.substring(0, match.index)} <a href="https://jira.proofpoint.com/jira/browse/ISO-${match[2]}" target=_blank>${match[0]}</a> ${t.substring(match.index + match[0].length)}`;
        });
    
    setTimeout(addLink, 250);
})();
