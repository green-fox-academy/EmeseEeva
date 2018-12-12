
const buttons = document.querySelector('nav');
const image = document.querySelector('.img-inspector');

let xPos = 0;
let yPos = 0;
let size = 200;

buttons.addEventListener('click', e => {
    if (e.target.dataset.direction === 'in') {
        size += 10;
        image.style.backgroundSize = `${size}%`
    }
    if (e.target.dataset.direction === 'out') {
        size -= 10;
        image.style.backgroundSize = `${size}%`
    }
    if (e.target.dataset.direction === 'right') {
        xPos += 10;
        image.style.backgroundPosition = `${xPos}px, ${yPos}px`;
    }
    if (e.target.dataset.direction === 'left') {
        xPos -= 10;
        image.style.backgroundPosition = `${xPos}px, ${yPos}px`;
    }
    if (e.target.dataset.direction === 'up') {
        yPos -= 10;
        image.style.backgroundPosition = `${xPos}px, ${yPos}px`;
    }
    if (e.target.dataset.direction === 'down') {
        yPos += 10;
        image.style.backgroundPosition = `${xPos}px, ${yPos}px`;
    }
});