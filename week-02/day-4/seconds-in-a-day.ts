

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let day : number = 86400;

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let seconsPassed: number = (currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds);

let remainingSeconds : number = day - seconsPassed

console.log (remainingSeconds);
