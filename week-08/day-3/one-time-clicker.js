'use strict'

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    console.log(e.timeStamp);
    button.disabled = true;
});


