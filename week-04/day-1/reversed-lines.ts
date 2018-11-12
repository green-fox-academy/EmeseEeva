import { listeners } from "cluster";

// Create a method that decrypts reversed-lines.txt

export { }

// Create a method that decrypts duplicated-chars.txt
const fs = require('fs');

//general functions to read and write a file
function readFromFile(filename: string): string {
    return fs.readFileSync(filename, 'utf-8');
}

function writeToFile(filename: string, data: string): void {
    fs.writeFileSync(filename, data);
}

function reverseString(filename: string) {
    let fileContent = readFromFile(filename);
    let splitString = fileContent.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;

}

console.log(reverseString('reversed-lines.txt'));