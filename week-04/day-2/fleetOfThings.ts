class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
    thingComplete(i: number) {
        this.things[i].complete();
    }

    print() {
        for (let j: number = 0; j < this.things.length; j++) {
            console.log(j + 1 + ' ' + this.things[j].print());
        }
    }
}
class Thing {
    private name: string;
    private completed: boolean;

    constructor(name: string) {
        this.name = name;
    }

    public complete() {
        this.completed = true;
    }
    public print() {
        if (this.completed === true) {
            return('[x] ' + this.name);
        } else {
            return('[ ] ' + this.name);
        }
    }

}

let fleet = new Fleet();

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('GRemove the obstacles'));
fleet.add(new Thing('tand up'));
fleet.add(new Thing('Eat lunch'));

// fleet.returnValueOfFleet(2).complete();
// fleet.returnValueOfFleet(3).complete();

fleet.thingComplete(2);
fleet.thingComplete(3);

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.print();