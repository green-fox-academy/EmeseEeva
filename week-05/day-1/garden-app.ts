export { }

class Garden {
    plantList = [];


    constructor() {
        this.plantList = [];
    }

    addFlower(name: string) {
        let newFlower: Flower = new Flower(name);
        this.plantList.push(newFlower);
    }
    addTree(name: string) {
        let newTree: Tree = new Tree(name);
        this.plantList.push(newTree);
    }
    needWatering() {
        this.plantList.forEach(e => {
            if (e.needWater()) {
                console.log(`The ${e.getName()} ${e.getType()} needs water`);
            }
            else {
                console.log(`The ${e.getName()} ${e.getType()} does not need water`);
            }
        });
    }
    watering(waterAmount: number) {
        let numOfWateredPlants: number = 0;
        this.plantList.forEach(e => {
            if (e.needWater()) {
                numOfWateredPlants++;
            }
        })
        let currentWaterAmount = waterAmount / numOfWateredPlants;

        this.plantList.forEach(e => {
            if (e.needWater()) {
                e.getWatered(currentWaterAmount);
            }
        });
        console.log(`Watering with ${waterAmount}.`);
        this.needWatering();
    }
}
class Plant {
    type: string;
    name: string;
    waterAmount: number;
    absorbingCapacity: number;

    constructor(name: string) {
        this.type = '';
        this.name = name;
        this.waterAmount = 0;
        this.absorbingCapacity = 0;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    getWaterAmount() {
        return this.waterAmount;
    }
    getAbsorbingCapacity() {
        return this.absorbingCapacity;
    }
    needWater() {
        if (this.waterAmount < 5) {
            return true;
        } else {
            return false;
        }
    }
    getWatered(inputAmount: number) {
        return this.waterAmount += inputAmount * this.absorbingCapacity;
    }
}
class Flower extends Plant {

    constructor(name: string) {
        super(name);
        this.type = 'Flower';
        this.absorbingCapacity = 0.75;
    }
}
class Tree extends Plant {

    constructor(name: string) {
        super(name);
        this.type = 'Tree';
        this.absorbingCapacity = 0.4;
    }
}
let newGarden = new Garden();

newGarden.addFlower('yellow');
newGarden.addFlower('blue');
newGarden.addTree('purple');
newGarden.addTree('pragne');

newGarden.needWatering();
newGarden.watering(40);
newGarden.watering(70);