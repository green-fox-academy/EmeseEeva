export { }

/* Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.
*/

class Blogpost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authorName: string, title: string, text: string, publicationDate: string) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}
let BlogPost1 = new Blogpost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let BlogPost2 = new Blogpost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10');
let BlogPost3 = new Blogpost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

//console.log(BlogPost1, BlogPost2, BlogPost3);

class Blog {
    listOfBlogposts: Blogpost[] = [];

    constructor() {
        this.listOfBlogposts = [];
    }

    addBlogpPost(newBlogPost: Blogpost) {
        this.listOfBlogposts.push(newBlogPost);
   
    }
    
    deleteBlogPost(int: number){
        this.listOfBlogposts.splice(int-1,1);
    }

    updateBlogPost(int:number, newBlogPost: Blogpost){
        this.listOfBlogposts.splice(int-1, 1, newBlogPost);
    }
}

let newBlog = new Blog();

//console.log(newBlog);

newBlog.addBlogpPost(new Blogpost ('Mesike', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'));
console.log(newBlog);
newBlog.addBlogpPost(new Blogpost ('Mesike', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.05.'));
console.log(newBlog);
newBlog.deleteBlogPost(2);
console.log(newBlog);
newBlog.updateBlogPost(1, new Blogpost('Mesike', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.06.'));
console.log(newBlog);