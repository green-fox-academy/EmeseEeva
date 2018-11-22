'use strict'

export class Sum {
    listOfNum: any[];

    constructor(listOfNum: any[]) {
        this.listOfNum = listOfNum;
    }

    getSum() {
        let numToSum = 0;
        this.listOfNum.forEach(e => {
            numToSum += e;
        });
        return numToSum;
    }
}

let newListOfNum = new Sum([1,2,3,4,5]);
console.log(newListOfNum.getSum());