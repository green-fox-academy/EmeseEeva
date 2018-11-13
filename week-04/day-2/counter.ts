export { }

/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value
*/

class Counter {
    numb: number;
    initialValue: number;

    constructor(numb: number = 0, initialValue: number = 5) {
        this.numb = numb;
        this.initialValue = initialValue;
    }

    add(number?: number) {
        if (number === undefined) {
            this.numb++
        }
        else {
            this.numb += number;
        }
        return this.numb;
    }

    get() {
        return this.numb.toString();
    }
    reset() {
        this.numb = this.initialValue;
        return this.numb
    }
}

let n = new Counter();

console.log(n.add());
console.log(n.get());
console.log(n.reset());