export { }

'use strict'

abstract class Animal {
    name: string;
    age: number;
    gender: boolean;

    constructor(name) {
        this.name = name;
        this.age = 18;
        this.gender = true;
    }
    getName() {
        return this.name;
    }
    breed() {
    }
    feed() {
    }
}

class Reptile extends Animal {

    constructor(name: string) {
        super(name);
    }
    breed() {
        return 'laying eggs';
    }
}
class Mammal extends Animal {

    constructor(name: string) {
        super(name);
    }
    breed() {
        return 'pushing miniature versions out';
    }
}
class Bird extends Animal {

    constructor(name: string) {
        super(name);
    }
    breed() {
        return 'laying eggs';
    }
}
let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());