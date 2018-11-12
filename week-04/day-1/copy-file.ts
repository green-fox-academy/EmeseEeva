export { }
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful


var fs = require('fs');

function cFile(filename1: string, filename2: string) {
    fs.copyFile(filename1, filename2, (err) => {
        if (err) throw false;
        console.log(true);
    });
}

cFile('my-file.txt', 'destination.txt');