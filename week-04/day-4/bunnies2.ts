export { }

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEarCounter(numOfBunnies: number) {
    if (numOfBunnies > 0) {
        if (numOfBunnies % 2 !== 0) {
            return 2 + bunnyEarCounter(numOfBunnies - 1);
        }
        else if ((numOfBunnies % 2 === 0)) {
            return 3 + bunnyEarCounter(numOfBunnies - 1);
        }
    }
    else if (numOfBunnies === 0) {
        return 0;
    }
}
console.log(bunnyEarCounter(12));

