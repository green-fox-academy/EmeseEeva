'use strict'

const imageUrl = document.querySelector('img');
console.log(imageUrl.getAttribute('src'));

imageUrl.setAttribute('src', 'http://zoozoo.hu/wp-content/uploads/2017/08/b118ea66-2d62-42b9-9746-c5901f277ce5.jpg');

const siteLink = document.querySelector('a');
siteLink.setAttribute('href', 'https://www.greenfoxacademy.com');

const removeButton = document.querySelector('.this-one');
removeButton.textContent = 'Don\'t click me!'
document.querySelector('.this-one').disabled = true;


