export { }

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function takeNumber(a: number) {
    try {
        if (a === 0) {
            return 'fail';
        }
        else {
            return 10 / a;
        }
    }
    catch (e) {
        console.log(e.message);
    }
}

console.log(takeNumber(0));
