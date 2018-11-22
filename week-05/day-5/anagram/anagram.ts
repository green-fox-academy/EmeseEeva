'use strict'

export function anagram(stringOne: string, stringTwo: string): boolean {
    return stringOne.split('').sort().join('') === stringTwo.split('').sort().join('');
}

console.log(anagram('listen', 'silent'));
console.log(anagram('listen', 'silenn'));