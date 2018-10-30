// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num) {
    if (num === 0 || num === 1)
      return 1;
    
    for (var i = num - 1; i >= 1; i--) {
     
      num = num * i; 
    }
    return num; 
  }
  let myResult = factorio(5);
  console.log (myResult);
  

  