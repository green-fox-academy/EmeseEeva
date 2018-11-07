'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(290, 10);
ctx.lineTo(290, 290);
ctx.lineTo(10, 290);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(70, 70);
ctx.lineTo(80, 90);
ctx.lineTo(90, 90);
ctx.lineTo(100, 70);
ctx.lineTo(120, 100);
ctx.lineTo(85, 130);
ctx.lineTo(50, 100);
ctx.closePath();
ctx.stroke();



