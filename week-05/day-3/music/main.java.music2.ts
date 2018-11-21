import { Instrument } from "./main.java.music"

'use strict'

export abstract class StringedInstrument extends Instrument {
    numberOfString: number;

    constructor(numberOfString: number, name: string){
        super(name);
        this.numberOfString = numberOfString;
    }
    abstract sound()
}
