'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSteps3D (x,y, z){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, z, z);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, z, z);
}

let position:number [] = [14, 14]
for (let i = 1; i <= 6; i++){
    purpleSteps3D(position[0], position[1], 14 * i);
    position[0] += 14 * i;
    position[1] += 14 * i;
}