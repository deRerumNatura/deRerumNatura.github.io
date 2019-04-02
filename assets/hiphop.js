function dd(el) {
    console.log(el);
}

let hiphopDude = document.getElementById('hiphop-dude');
let playlist = document.getElementById('playlist');
let years = document.getElementById('years');

const playlistHeight = playlist.offsetHeight;
const bottomHeightOfDude = window.innerHeight - hiphopDude.offsetHeight;

let leftSideTitleBlock = document.getElementById('leftSideTitleBlock');
leftSideTitleBlock.style.height = hiphopDude.offsetHeight - 8 + "px";

let musicList = document.getElementById('musicList');
musicList.style.paddingTop = window.innerHeight - hiphopDude.offsetHeight + "px";

window.onscroll = function (e) {
    setTimeout(function () {
        nextPosition = document.documentElement.scrollTop;
    }, 100);

    if (hiphopDude.getBoundingClientRect().bottom >= document.querySelector('.music-list li:last-child').getBoundingClientRect().bottom
        && nextPosition < document.documentElement.scrollTop
    ) {
        hiphopDude.style.position = 'relative';
        hiphopDude.style.display = 'flex';
        hiphopDude.style.alignItems = 'flex-end';
        hiphopDude.style.left = 0 + 'vw';
        years.style.position = 'absolute';
        years.style.display = 'flex';
        years.style.alignItems = 'flex-end';
        years.style.bottom = 43 + 'vh';
    }

    if (bottomHeightOfDude + 200 <= musicList.getBoundingClientRect().bottom && nextPosition > document.documentElement.scrollTop) {
        hiphopDude.style.position = 'fixed';
        hiphopDude.style.left = 50 + 'vw';
    }
}