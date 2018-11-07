'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


    
    for (let x = 0; x < 12; x++){

        for ( let y = 0; y < 12; y++){

            if (x % 2 === y % 2){

                ctx.fillStyle = 'black';
                ctx.fillRect(50 * x, 50 * y, 50, 50);
            }
            else {
                ctx.fillStyle = 'white';
                ctx.fillRect(50 * x, 50 * y, 50, 50);

            }

    }}