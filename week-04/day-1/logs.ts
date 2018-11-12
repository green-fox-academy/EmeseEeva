export { }

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

//general functions to read and write a file
function readFromFile(filename: string): string {
    return fs.readFileSync(filename, 'utf-8');
}


function uniqueIP(filename: string) {
    let fileContent = readFromFile(filename);
    let myArray = fileContent.split('\n');
    let uniqueArray = [...new Set(myArray)];;
    return uniqueArray;

}

// console.log(uniqueIP('log.txt'));

function ratioCount(filename: string) {
    let get: number = 0;
    let post: number = 0;
    let fileContent = readFromFile(filename).split('\n');
    fileContent.forEach(e => {
        if (e.includes('GET')) {
            get++;
        }
        else if (e.includes('POST')) {
            post++;
        }

    

    });

    return get / post;
}

console.log(ratioCount('log.txt'));