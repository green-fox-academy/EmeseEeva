let test = require('tape')
import { countLetter } from "./count-letters";

'use strict'

test('lets test the counter', t => {
    t.deepEqual(countLetter('better'), {b: 1, e: 2, t:2, r:1}, 'these are the characters');
    t.end();
})
