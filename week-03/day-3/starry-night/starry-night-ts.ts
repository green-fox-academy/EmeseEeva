'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);


for (let i = 0; i <= 80; i++){

    let x = Math.floor(Math.random() * 600);
    let y = Math.floor(Math.random() * 400);
    let color = Math.floor(Math.random() * 255);

    ctx.fillStyle = `rgb(${color},${color},${color})`;

    ctx.fillRect(x, y, 2, 2);
}