export { }

// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters. For example: x: 5, y: 6, z: 15
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume

class Cuboid {
    dimensionOne: number;
    dimensionTwo: number;
    dimensionTree: number;

    constructor(dimensionOne = 5, dimensionTwo = 6, dimensionTree = 15) {
        this.dimensionOne = dimensionOne;
        this.dimensionTwo = dimensionTwo;
        this.dimensionTree = dimensionTree;
    }
    getSurface() {
        let surface = 2 * (this.dimensionOne * this.dimensionTwo + this.dimensionTwo * this.dimensionTree + this.dimensionOne * this.dimensionTree);
        return surface;
    }
    getVolume() {
        let volume = this.dimensionOne * this.dimensionTwo * this.dimensionTree;
        return volume;
    }
}
let newCuboid = new Cuboid();
console.log(newCuboid.getSurface());
console.log(newCuboid.getVolume());
