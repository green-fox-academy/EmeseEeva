'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function SquareDraw(x){

    for (let i = 0; i < 3; i++){

        ctx.fillStyle = `rgb(0, 0, ${255 * i / 2})`;
        ctx.fillRect((canvas.width / 2 - (x / 2)) * i, canvas.height / 2 - (x / 2), x, x );
    }
}

SquareDraw(50);
