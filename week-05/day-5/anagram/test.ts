let test = require('tape')
import { anagram } from "./anagram";

test('testing anagramma', t => {
    let test1 = 'listen';
    let test2 = 'silent';
    let test3 = 'silenn';

    t.equal(anagram(test1, test2), true, 'test1 and test2 are anagrams');
    t.equal(anagram(test2, test3), false, 'test2 and test3 are not anagrams');
    t.end();

})