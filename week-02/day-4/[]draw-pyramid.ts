let row = 4;

for (let i=1; i <=row; i++){
    for (let k=1; k <= (row-i); k++){
        console.log (" ");
    }
    for (let j=1; j<=i; j++){
        console.log ("*");
    }
}