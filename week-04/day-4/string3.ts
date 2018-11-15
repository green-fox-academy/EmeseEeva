export { }

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.




function makingNewString(characters: string): string {
    if (characters.length > 0) {
        return characters.slice(0, 1) + '*' + makingNewString(characters.slice(1));
    }
    else {
        return '';
    }
}

console.log(makingNewString('abandorbffoahfewuoaf'));

