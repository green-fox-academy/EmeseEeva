export {}

'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let position = 18;
let missingPart = 'always takes longer than';

let newQuote = quote.slice(0,position) + missingPart + quote.slice(position);

console.log(newQuote);
