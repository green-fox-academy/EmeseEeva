export { }

/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

class PostIt {
    backgroundColor: string;
    textOnIt: string;
    textColor: string;

    constructor(backgroundColor: string, textOnIt: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.textOnIt = textOnIt;
        this.textColor = textColor;
    }
}

let PostItOragne = new PostIt('orange', 'blue', 'Idea 1');
let PostItPink = new PostIt('pink', 'black', 'Awesome');
let PostItYellow = new PostIt('yellow', 'green', 'Superb!');

console.log(PostItOragne, PostItPink, PostItYellow);