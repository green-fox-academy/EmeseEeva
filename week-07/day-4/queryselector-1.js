
'use strict'

const king = document.querySelector('.asteroid');
console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => {
    console.log(e.innerHTML);
});

const makeArray = document.querySelector('section');
const conceitedKing = makeArray.querySelectorAll('div');
conceitedKing.forEach(e => {
    alert(e.innerHTML);
});

const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => {
    console.log(e.innerHTML);
});



