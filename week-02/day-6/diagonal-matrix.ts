export {};
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let array1 = [];
let row = 4;
let col = 4;

for (var i = 0; i < row; i++) {
    array1[i] = [];
    for (var j = 0; j < col; j++) {
        if (i + j === 3){
        array1 [i][j] = "1";
        }
        else {
            array1 [i][j] = "0";
        }
}}

console.log (array1);



