// ==UserScript==
// @name         Blocks ads
// @namespace    https://github.com/viller239
// @version      0.1.0
// @description  
// @updateURL    https://viller239.github.io/userscripts/src/twitch-ads.user.js
// @downloadURL  https://viller239.github.io/userscripts/src/twitch-ads.user.js
// @author       https://github.com/viller239
// @match        *://*.twitch.tv/*
// @run-at       document-end
// ==/UserScript==

{
    const realFetch = window.fetch;
	window.fetch = function(input, init) {
		if ( arguments.length >= 2 && typeof input === 'string' && input.includes('/access_token') ) {
			var url = new URL(arguments[0]);
			url.searchParams.set("player_type", "embed");
			arguments[0] = url.href;
		}
		return realFetch.apply(this, arguments);
	};
}
