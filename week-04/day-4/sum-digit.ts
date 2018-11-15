// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sum(num: number) {
    if (num > 10) {
        return Math.floor(num % 10) + sum(Math.floor(num / 10));
    }
    else {
        return Math.floor(num);
    }
}
console.log(sum(928));
console.log(sum(20928));
console.log(sum(2020928));