'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const canvasWidth: number = canvas.width;
//const canvasHeight: number = canvas.height;
//triangle side size

//equal side triangle generator based on starting point and side size
function drawEqTriangle(x, y, size) {
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y + size * Math.sqrt(3) / 2);
  ctx.lineTo(x - size / 2, y + size * Math.sqrt(3) / 2);
  ctx.lineTo(x, y);
  ctx.stroke()

}

function triangleFractal(x: number, y: number, size: number, loopNum: number) {
  if (loopNum > 1) {
    let startH: number = size * Math.sqrt(3) / 2;
    drawEqTriangle(x, y, size);

    let startXOne: number = x + size / 2
    let startYTwo: number = y + startH;
    let startXThree: number = x - size / 2;
   

    size /= 2;
    startH /= 2;

    triangleFractal(startXOne, y, size , loopNum - 1)
    triangleFractal(x, startYTwo, size , loopNum - 1)
    triangleFractal(startXThree, y, size , loopNum - 1)
  }
}
triangleFractal(canvas.width / 2, 0, canvas.width / 2, 7)