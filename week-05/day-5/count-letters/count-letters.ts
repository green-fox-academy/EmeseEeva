'use strict'

export function countLetter(stringOne: string): any {
    let newArray = stringOne.split('');
    let map = {};
    newArray.join('').split('').forEach(e => map[e] = (map[e] || 0) + 1);
    return map;
}

console.log(countLetter('count the caharcters please'));
