export { }


// Given a string, compute recursively a new string where all the 'x' chars have been removed.


function replaceXtoY(characters: string, charX: string, charN: string):string {
    if (characters.indexOf(charX) === -1) {
        return characters;
    }
    else {
        return replaceXtoY(characters.replace(charX, charN), charX, charN);
    }
}

console.log(replaceXtoY('vbbxxxxnzzxxxhjkoxx','x',''));