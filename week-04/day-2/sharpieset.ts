export { }

/* Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount
*/

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use() {
        this.inkAmount = this.inkAmount - this.width;
        return this.inkAmount;
    }
    getInkAmount() {
        return this.inkAmount;
    }
}


/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies
*/

class SharpieSet {
    sharpieList: Sharpie[];

    constructor() {
        this.sharpieList = [];
    }

    countUsable() {
        let usableNo: number = 0;;
        for (let i = 0; i < this.sharpieList.length; i++) {
            if (this.sharpieList[i].getInkAmount() > 0) {
                usableNo++;
            }
        };
        return usableNo;
    }

    removeTrash() {
        for (let i = 0; i < this.sharpieList.length; i++) {
            if (this.sharpieList[i].getInkAmount() <= 0) {
                this.sharpieList.splice(i, 1);
                i--;
            }
        }
    }
}

let sharpieSetTest: SharpieSet = new SharpieSet();

let colorPalette: string[] = ['pink', 'blue', 'gree', 'black', 'red', 'purple', 'yellow', 'orange']
for (let i = 0; i < 10; i++) {
    sharpieSetTest.sharpieList[i] = new Sharpie(colorPalette[Math.floor(Math.random() * 7)], 10 + Math.floor(Math.random() * 10));
}

console.log(sharpieSetTest);
console.log(sharpieSetTest.countUsable());
sharpieSetTest.removeTrash();
console.log(sharpieSetTest);
