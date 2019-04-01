let hiphopDude = document.getElementById('hiphop-dude');
let playlist = document.getElementById('playlist');

const playlistHeight = playlist.offsetHeight;

window.onscroll = function (e) {
    if (playlist.getBoundingClientRect().bottom <= 362) {
        hiphopDude.style.position = 'absolute';
        hiphopDude.style.top = playlistHeight - 300 + 'px';
    }
    else {
        hiphopDude.style.position = 'fixed';
        hiphopDude.style.width = '50vw';
        hiphopDude.style.right = '0';
        hiphopDude.style.top = '10vh';
    }
}

