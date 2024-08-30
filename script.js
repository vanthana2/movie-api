"use strict";

let form = document.querySelector('form');
let container = document.querySelector('.image-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);

    tvMazeApi(query);
});

async function tvMazeApi(query) {
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    
    makeImages(movies);
}

function makeImages(movies) {
    container.innerHTML = ''; 
    for (let movie of movies) {
        if (movie.show.image) {
            let src = movie.show.image.medium;

            const img = document.createElement('img');
            img.src = src;

            container.appendChild(img);
        }
    }
}
