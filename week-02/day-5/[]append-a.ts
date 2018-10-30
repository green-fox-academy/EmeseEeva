// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];

let newList = animals.forEach (function(element, index, array) {

array [index] = element + "a";

});

console.log (animals);


