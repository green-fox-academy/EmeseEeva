let createCandies = document.querySelector('.create-candies');
let candies = document.querySelector('.candies');
let buyLollypops = document.querySelector('.buy-lollypops');
let lollypops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let makeCandyRain = document.querySelector('.candy-machine');

let candyCount = 0;
let lollyCount = 0;
let productionRate = 0;
let candyRainRate = 1;

let createCan = () => {
    candyCount++;
    candies.innerText = `${candyCount}`;
}

let createLolly = () => {
    if (candyCount >= 100) {
        candyCount -= 100;
        lollyCount++;
        lollypops.innerText += `🍭`;
        candies.innerText = `${candyCount}`;
    }
}

let candyGenerator = () => {
    let candyProductionRate = Math.floor(lollyCount / 10) * candyRainRate;
    candyCount += candyProductionRate;
    candies.innerText = candyCount;
    speed.innerText = candyProductionRate;
}

setInterval(candyGenerator, 1000);

createCandies.addEventListener('click', createCan);
buyLollypops.addEventListener('click', createLolly);
makeCandyRain.addEventListener('click', () => {
    candyRainRate *= 10;
});