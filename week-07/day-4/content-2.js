'use strict'

const newArray = document.querySelectorAll('li');
const newContent =  ['apple', 'banana', 'cat', 'dog'];

newArray.forEach((e,i) => {
    e.textContent = newContent[i];
});

const newList = document.querySelector('ul');
newList.classList.add('limegreen');
