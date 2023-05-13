

const iframe = document.querySelector('vimeo-player');
const nplayer = new Vimeo.Player(iframe);
console.log(player);

nplayer.on('play', function() {
    console.log('played the video!');
});

nplayer.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

