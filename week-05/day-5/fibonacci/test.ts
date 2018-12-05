let test = require('tape')
import { fibonacci } from "./fibonacci";

test('fibonacci test', t => {
    t.equal(fibonacci(8),21,'this is the correct output');
    t.equal(fibonacci(0),0, 'fibonacci 0 is 0');
    t.equal(fibonacci(1),1, 'fibonacci 1 is 1');
    t.throws (function() {fibonacci(-12)}, 'Please provide a positive number') 
    t.end();
})