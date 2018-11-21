import { Comparable } from "./comparable"

'use strict'

class Thing {
    private name: string;
    private completed: boolean;

    constructor(name: string){
        this.name = name;
    }

    public complete() {
        this.completed = true;
    }
}

export { Thing };
