'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

// Draw a colored line
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(350, 150);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(350, 150);
ctx.lineTo(350, 250);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(150, 250);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(150, 250);
ctx.lineTo(150, 150);
ctx.stroke();
