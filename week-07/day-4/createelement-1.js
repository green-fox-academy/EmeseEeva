const asteroidList = document.querySelector('ul');
const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

const newLampLighter = document.createElement('li');
newLampLighter.textContent = 'The Lamplighter';
asteroidList.appendChild(newLampLighter);

const container = document.querySelector('.container');
const header = document.createElement('h3');
header.textContent = 'I can add elements to the DOM!'
container.appendChild(header);

const newPicture = document.createElement('img');
newPicture.setAttribute('src','http://zoozoo.hu/wp-content/uploads/2017/08/b118ea66-2d62-42b9-9746-c5901f277ce5.jpg');
container.appendChild(newPicture);

