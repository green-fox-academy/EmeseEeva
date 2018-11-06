'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

function candy(list){
    let sum = 0;
    list.forEach(function(e){
        sum += e.candies;

    });

    return sum;
}

console.log (candy(students));

function sumAge(list1: any[]): number {
    let sumage: number = 0;
    list1.forEach(function(e) {
      if (e.candies < 5) {
        sumage += e.age;
      }
    });
    return sumage;
  }
  console.log(sumAge(students));






// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies