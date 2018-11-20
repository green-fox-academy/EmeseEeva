export { }

// Create a function that takes a string parameter,
// counts the occurrences of the letter "a", and returns it as a number.

// example: on the input "Apple" the function should return 1 - print this result
// example: on the input "Avocado" the function should return 2 - print this result
// example: on the input "Blueberry" the function should return 0 - print this result

let sum = 0;

function countAs(list: string): any {
    let newList = list.toLowerCase().split('');
    newList.forEach(function (e, i, a) {
        if (a[i] === 'a') {
            return sum++;
        }
    });
}
countAs('Avocado');
console.log(sum);



