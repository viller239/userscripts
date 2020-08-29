// ==UserScript==
// @name         Mute twitch ads
// @namespace    https://github.com/viller239
// @version      0.6
// @description  Muting video when ads are playing
// @author       https://github.com/viller239
// @match        *://*.twitch.tv/*
// @run-at       document-end
// ==/UserScript==

(function check() {
    Array.from(document.querySelectorAll('.video-player'))
        .forEach((vpEl) => {
            try {
                const videoEl = vpEl.querySelector('video');
                if (!videoEl) return;
                const hasAds = /(?:\W|^)ad(?:\W|$)/gi.test(vpEl.innerText);
                const hadAds = vpEl.__hasAds;
                vpEl.__hasAds = hasAds;
                // mute when ads
                if (hasAds && !hadAds) {
                    console.log('muting ads')
                    vpEl.__volume = videoEl.volume;
                    videoEl.volume = 0;
                }
                // restore sound when no ads
                if (!hasAds && hadAds && (vpEl.__volume !== undefined)) {
                    console.log('un-muting video', { hasAds, hadAds, vol: vpEl.__volume, t: vpEl.innerText })
                    videoEl.volume = vpEl.__volume;
                }
            } catch (e) {
                console.warn('ad check error', e);
            }
        });
    setTimeout(check, 250);
}());
