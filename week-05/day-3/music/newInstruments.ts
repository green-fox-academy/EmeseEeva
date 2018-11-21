//import { Instrument } from "./main.java.music"
import { StringedInstrument } from "./main.java.music2";

'use strict'

class ElectricGuitar extends StringedInstrument{

    constructor(numberOfString = 6){
        super(numberOfString,'Electric Guitar');
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfString} instrument that goes ${this.sound()}`);
    }
    sound(): string{
        return 'Twang';
    }
}
class BassGuitar extends StringedInstrument{

    constructor(numberOfString = 4){
        super(numberOfString,'Bass Guitar');
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfString} instrument that goes ${this.sound()}`);
    }
    sound(): string{
        return 'Duum-duum-duum';
    }
}
class Violin extends StringedInstrument{

    constructor(numberOfString = 4){
        super(numberOfString,'Violin');
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfString} instrument that goes ${this.sound()}`);
    }
    sound(): string{
        return 'Screech';
    }
}
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();