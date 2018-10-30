// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];
let temp = "Arthur";


abc[0] = abc[2];
abc[2] = temp;

console.log (abc);
