'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'pink';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function draw(startX, startY, len, angle) {
    ctx.beginPath();
    ctx.save();
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();
    
    if(len < 8) {
      ctx.restore();
      return;
    }
    
    draw(0, -len, len*0.8, -15);
    draw(0, -len, len*0.8, 15);
    
    ctx.restore();

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black"; 
  }


  draw(350,600,120,0);
