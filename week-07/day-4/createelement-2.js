'use strict'

const asteroidList = document.querySelector('.asteroids');
const king = document.querySelector('li');
asteroidList.removeChild(king);

const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];

planetData.forEach(e => {
    if (e.asteroid === true) {
        const newAsteroid = document.createElement('li');
        newAsteroid.classList.add(e.category);
        newAsteroid.textContent = e.content;
        asteroidList.appendChild(newAsteroid);
    }
});