export { }

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function readFromFile(fileName: string): any {
    try {
        return fs.readFileSync('my-file.txt', 'utf-8');
    } catch (e) {
        console.log(e.message);
        return null;
    }

}
(readFromFile('my-file.txt'));

function countLinesNum(linesNum: string): number {
    const fileContent: string = readFromFile('my-file.txt');

    if (fileContent !== null) {
        fileContent.split('\n')
        return fileContent.length;
    }
}

console.log(countLinesNum('my-file.txt'));