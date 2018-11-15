export { }

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addsNumber(num: number) {
    if (num > 0) {
        return num + addsNumber(num - 1);
    }
    else {
        return 0;
    }
}

console.log(addsNumber(4));