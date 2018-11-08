export {}

'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(e:any){
    return (e === 4 || e === 8 || e === 12 || e === 16) ; 
 } 
           
 var passed = listOfNumbers.some(checkNums); 

 console.log(passed);


