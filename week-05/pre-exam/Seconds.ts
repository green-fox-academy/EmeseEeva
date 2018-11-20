export { };

// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the original list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

let list: any = [1, 2, 3, 4, 5];
let newList: any[] = [];

function onlyEvereySecond(list: any = []): any {
    list.forEach(e => {
        if (e % 2 === 0) {
            return newList.push(e);
        }
    });
}
onlyEvereySecond(list);
console.log(newList);
