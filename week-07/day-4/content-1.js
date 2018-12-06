'use strict'

const lastLine = document.querySelector('.animals');
const allLines = document.querySelectorAll('p');

allLines.forEach(e => {
    e.innerHTML = lastLine.innerHTML;
})