export { }

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


function isPowerOfTwo(baseN: number, powerN: number) {
    if (powerN === 1) {
        return baseN;
    }
    else {
        return baseN * isPowerOfTwo(baseN, powerN - 1);
    }
}

console.log(isPowerOfTwo(3,2));
console.log(isPowerOfTwo(3,6));
console.log(isPowerOfTwo(3,1));