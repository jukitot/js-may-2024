let titles = document.querySelectorAll('.item-grid-card__title')
let authors = document.querySelectorAll('.item-grid-music-preview__author')
let audios = document.querySelectorAll('[data-audio-player-preview-url-value]')

let arrayTracks = []
for (let i = 0; i < titles.length ; i++) {
    let track = {
        title: titles[i].innerText,
        author: authors[i].innerText,
        mp3: audios[i].getAttribute('data-audio-player-preview-url-value')
    }
    arrayTracks.push(track);
}

console.log(arrayTracks);
