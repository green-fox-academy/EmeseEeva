const genre = document.querySelector('#genreselector');
const movies = document.querySelector('#filmselector');
const paragraph = document.querySelector('p');

const movieList = {
    'scifi': ['Moon', '2001 Space Odessy', 'Darkest hour'],
    'drama': ['There will be blood', 'Wayne\'s world', 'American Beauty'],
    'comedy': ['Deadpool', 'Airplane!', 'Contact']
}

const addMovie = (gen) => {
    while (movies.firstChild) {
        movies.removeChild(movies.firstChild);
    }

    const options = document.createElement('option');
    options.value = '';
    options.innerText = 'Pick a movie!';
    movies.appendChild(options);

    const movieToWatch = movieList[`${gen}`];
    movieToWatch.forEach(e => {
        const movieOption = document.createElement('option');
        movieOption.value = e;
        movieOption.innerText = e;
        movies.appendChild(movieOption);
    });
}

genre.addEventListener('change', () => {
    switch (genre.value) {
        case '0':
            while (movies.firstChild) {
                movies.removeChild(movies.firstChild);
            }
            break;
            
        case 'scifi':
            addMovie('scifi');
            break;

        case 'drama':
            addMovie('drama');
            break;

        case 'comedy':
            addMovie('comedy');
            break;
    }
});

movies.addEventListener('change', () => {
    paragraph.innerText = movies.value;
});

