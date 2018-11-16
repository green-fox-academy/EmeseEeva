'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
function generateSequence() {
    let sequence = "0";
    for(let i=0; i < 19; i++) {
        let parts = sequence.split("");
        let complement = "";
        for(let j=0; j<parts.length; j++) {
            complement = complement + 
                      (parts[j] == "0" ? "1" : "0");
        }
        sequence += complement;
    }
    return sequence;
}

function draw() {
  let sequence = generateSequence();
  let parts = sequence.split("");
  ctx.translate(0, canvas.height/1.5);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2);
  for(let i = 0; i < parts.length; i++) {
    if(parts[i] == "0") {
        ctx.translate(0,0.2);
        ctx.lineTo(0,0.2);            
    } else {
        ctx.rotate(Math.PI/3);
    }
  }
  ctx.stroke();
}

draw();