export { }

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.


function replaceXtoY(characters: string, charX: string, charY: string):string {
    if (characters.indexOf(charX) === -1) {
        return characters;
    }
    else {
        return replaceXtoY(characters.replace(charX, charY), charX, charY);
    }
}

console.log(replaceXtoY('vbbnzzhjko','x','y'));