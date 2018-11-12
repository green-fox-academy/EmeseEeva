export {}

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');

function readFromFile(fileName:string):any {
    try{
        return fs.readFileSync('my-file.txt', 'utf-8');
    } catch(e){
        console.log(e.message);
        return 'Unable to read file: my-file.txt';
    }

}
console.log(readFromFile('my-file.txt'));