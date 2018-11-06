export {}

'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let position = 5;
let missingPart = ':';

let newUrl = (url.slice(0, position) + missingPart + url.slice(position));

let newNewUrl = newUrl.slice(0,-4);

console.log(newNewUrl + 'odds');