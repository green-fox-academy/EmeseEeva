export { }

/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
*/

class Station {
    gasAmount: number;

    constructor(gasAmount: number = 0) {
        this.gasAmount = gasAmount;
    }

    refill(car: Car) {
        this.gasAmount = this.gasAmount - car.capacity;
        car.gasAmount = car.gasAmount + car.capacity;
    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

}
let stationOne: Station = new Station(1000);
let stationTwo: Station = new Station();
let carTest: Car = new Car();

console.log(stationOne, stationTwo, carTest);
stationOne.refill(carTest);
stationTwo.refill(carTest);
console.log(stationOne, stationTwo, carTest);
stationOne.refill(carTest);
stationTwo.refill(carTest);
console.log(stationOne, stationTwo, carTest);