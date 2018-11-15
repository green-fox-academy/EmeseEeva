export { }

// Write a recursive function that takes one parameter: n and counts down from n.

function factorial(num: number): number {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log('5! is ', factorial(5));