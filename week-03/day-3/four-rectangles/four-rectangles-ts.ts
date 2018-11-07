'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function rectangles(x,y) {

    for (let i = 0; i < 4; i++){

        ctx.fillStyle = `rgb(0, ${255 * i / 2}, 0)`;
        ctx.fillRect(x * i + 60, y , 40, 40);
    }
}

rectangles(50,50);