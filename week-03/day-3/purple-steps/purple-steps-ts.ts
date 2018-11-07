'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSteps(x,y){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, 19, 19);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, 19, 19);
}

for (let i = 1; i < 19; i++){
    purpleSteps(19 * i, 19 * i);
}