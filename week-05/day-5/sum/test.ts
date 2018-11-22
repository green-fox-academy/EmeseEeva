let test = require('tape')
import { Sum } from "./sum";

'use strict'

test('testing method getSum', t => {
    let test1: Sum = new Sum ([12, 14, 11, 18]);
    t.equal(test1.getSum(),55, '12 + 14 + 11 + 18 = 175');
    let test2: Sum = new Sum ([null]);
    t.equal(test2.getSum(),0, 'Should return null');
    let test3: Sum = new Sum ([1]);
    t.equal(test3.getSum(),1, 'Should return one');
    let test4: Sum = new Sum ([]);
    t.equal(test4.getSum(),0, 'Empty array should return null');
    let test5: Sum = new Sum (['']);
    t.notEqual(test5.getSum(),0, 'Empty array of string should return nothing');
    t.end();
})