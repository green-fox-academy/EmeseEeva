export { }

/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one
*/

class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number, thirst: number) {
        this.hunger = hunger;
        this.thirst = thirst;

    }

    eat() {
        this.hunger--;
        return this.hunger;
    }

    drink() {
        this.thirst--;
        return this.thirst;
    }

    play() {
        this.hunger++;
        this.thirst++;
        return (this.hunger + this.thirst);

    }
}

let animal1 = new Animal(50, 50);



console.log(animal1);
console.log(animal1.eat());
console.log(animal1.drink());
console.log(animal1.play());
