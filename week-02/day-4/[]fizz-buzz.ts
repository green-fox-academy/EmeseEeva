

for (let i: number = 1; i <= 100; i++){
    
    if (i % 3 == 0){
        console.log("fizz");
    }

    else if (i % 5 == 0) {
        console.log ("buzz");
    }

    else if (i % 3 == 0 && i % 5 == 0){
        console.log ("FizzBuzz");
    }
    else {
        console.log (i);
    }

   
}

