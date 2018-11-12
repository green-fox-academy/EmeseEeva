export {}

// Create a method that decrypts duplicated-chars.txt
const fs = require('fs');

//general functions to read and write a file
function readFromFile(filename: string): string {
  return fs.readFileSync(filename, 'utf-8');
}

function writeToFile(filename: string, data: string): void {
  fs.writeFileSync(filename, data);
}

function decryptDouble(filename: string) {
  let fileContent: string = readFromFile(filename);
  let fileContentArray: string[] = fileContent.split('');
  for (let index = 0; index < fileContentArray.length; index++) {
    if (index % 2 === 0) {
      fileContentArray[index] = '';
    }
  }
  let decryptedString = fileContentArray.join('');
  return decryptedString;
}

console.log(decryptDouble('duplicated-chars.txt'));
