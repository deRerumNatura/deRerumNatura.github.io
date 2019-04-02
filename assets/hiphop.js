function dd(el) {
    console.log(el);
}

document.body.style.backgroundColor = "red";
document.body.style.opacity = 0;

setTimeout(function () {
    document.body.style.backgroundColor = "";
    document.body.style.opacity = 1;
}, 5000);

setTimeout(function () {
    let hiphopDude = document.getElementById('hiphop-dude');
    let playlist = document.getElementById('playlist');
    let years = document.getElementById('years');

    let firstTitleWord = document.getElementById('firstTitleWord');
    let secondTitleWord = document.getElementById('secondTitleWord');

    setTimeout(function () {
        firstTitleWord.style.top = '15vh';
        firstTitleWord.style.transition = '0.6s';
        secondTitleWord.style.left = '30vw';
        secondTitleWord.style.top = '33vh';
        secondTitleWord.style.transition = '0.6s';
    }, 500);

    setTimeout(function () {
        hiphopDude.style.left = '50vw';
        hiphopDude.style.transition = '2s';
    }, 2000);



    const playlistHeight = playlist.offsetHeight;
    const bottomHeightOfDude = window.innerHeight - hiphopDude.offsetHeight;

    let leftSideTitleBlock = document.getElementById('leftSideTitleBlock');
    leftSideTitleBlock.style.height = hiphopDude.offsetHeight - 8 + "px";

    let musicList = document.getElementById('musicList');
    musicList.style.paddingTop = window.innerHeight - hiphopDude.offsetHeight + "px";

    window.onscroll = function (e) {
        hiphopDude.style.transition = '';
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
}, 5000);