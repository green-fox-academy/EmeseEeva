'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareDrawer(x,y) {

    for (let i = 0; i < 3; i++){

        ctx.fillStyle = `rgb(${255 * i / 2},0, 0)`;
        ctx.fillRect(x * i + 100, y , 50, 50);
    }
}

squareDrawer(100,50);