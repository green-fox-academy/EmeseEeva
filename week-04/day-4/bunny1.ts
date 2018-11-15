export { }

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEarCounter(numOfBunny: number) {
    if (numOfBunny > 0) {
        return 2 + bunnyEarCounter(numOfBunny-1);
    }
    else {
        return 0;
    }
    }


console.log(bunnyEarCounter(12));