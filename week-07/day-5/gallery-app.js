'use strict'

const picGallery = [
    { imgID: 1, imgTitle: 'The London Eye', src: 'http://ibusz.hu/blog/wp-content/uploads/2014/07/shutterstock_155068436.jpg' },
    { imgID: 2, imgTitle: 'The Isle of Dogs, east London', src: 'https://page-assets.foxtons.co.uk/news-images/2016/01/canary-wharf-night/720.jpg' },
    { imgID: 3, imgTitle: 'The Big Ben', src: 'https://page-assets.foxtons.co.uk/news-images/2018/03/london-westminster-bridge/720.jpg' },
    { imgID: 4, imgTitle: 'London from a bird view', src: 'http://www.kevinandamanda.com/whatsnew/wp-content/uploads/2014/06/best-london-sunset-view-from-the-shard-07.jpg' },
    { imgID: 5, imgTitle: 'Central London', src: 'http://content.knightfrank.com/blog/2017/2/131a6ca5-2453-4a35-b106-0621137b7ee0/shard%20london%20thumb.png'},
    { imgID: 6, imgTitle: 'The Tower Bridge', src: 'https://i2.wp.com/www.authenticireland.com/blog/wp-content/uploads/2015/12/IMG_2514_resize-e1452716567309.jpg?fit=864%2C576&ssl=1'},
    { imgID: 7, imgTitle: 'Double-decker race ', src: 'https://media.kingseducation.com/assets/components/phpthumbof/cache/London-1.230bf1c21e23c7ece5efd80a1cee08e7.jpg'},
    { imgID: 8, imgTitle: 'National Gallery London ', src: 'https://antennainternational.com/wp-content/uploads/2018/03/menu_national_gallery.jpg'},
    { imgID: 10, imgTitle: 'The Buckingham Palace ', src: 'https://i1.wp.com/eatsleeplovetravel.com/wp-content/uploads/2018/09/buckingham-palace-978830_1920.png?fit=720%2C480&ssl=1'},
    { imgID: 11, imgTitle: 'Street art in London ', src: 'https://cdn.getyourguide.com/img/tour_img-69765-148.jpg'},
    { imgID: 12, imgTitle: 'Telephone box on the street ', src: 'https://retreatmag.com/wp-content/uploads/2015/03/london-e1470106509171-720x480.jpg'},
    { imgID: 13, imgTitle: 'London by night', src: 'http://utikaloz.info/wp-content/uploads/2018/05/1526486371_854_Around-the-World-trip-from-London-across-14-destinations-including-🇮🇳-India-Sr...-utikaloz-fly4free-repost.jpg'},
]

let navParent = document.querySelector('.nav');

picGallery.forEach(e => {
    let newThumbnail = document.createElement('img');
    navParent.appendChild(newThumbnail);
    newThumbnail.classList.add('thumbnail');
    newThumbnail.setAttribute('src', e.src);
    newThumbnail.setAttribute('alt', e.imgTitle);
    newThumbnail.setAttribute('id', e.imgID);
});

function displaySelectedImg(imageID) {
    const currentImg = document.querySelector('#currentimg');
    let selectedPic = picGallery.filter(e => {
        return (e.imgID === imageID);
    })[0];
    currentImg.setAttribute('src', selectedPic.src);
    currentImg.setAttribute('alt', selectedPic.imgTitle);
    let currentimgTitle = document.querySelector('#currentimgTitle');
    currentimgTitle.innerHTML = selectedPic.imgTitle;
}

let currentImgID = picGallery[0].imgID;
displaySelectedImg(currentImgID);

let counter = 0;

function rightClick() {
    if (counter < picGallery.length - 1) {
        counter++;
        let currentImgID = picGallery[counter].imgID;
        let previousImgID = picGallery[counter - 1].imgID;
        displaySelectedImg(currentImgID);
        let selectedThumbnail = document.getElementById(currentImgID);
        selectedThumbnail.style.border = '10px solid white';
        let previousThumbnail = document.getElementById(previousImgID);
        previousThumbnail.style.border = '10px solid black';

    } else {
        alert('This was the last picture of the gallery!')
    }
}

function leftClick() {
    if (counter > 0) {
        counter--;
        let currentImgID = picGallery[counter].imgID;
        let previousImgID = picGallery[counter + 1].imgID;
        displaySelectedImg(currentImgID);
        let selectedThumbnail = document.getElementById(currentImgID);
        selectedThumbnail.style.border = '10px solid white';
        let previousThumbnail = document.getElementById(previousImgID);
        previousThumbnail.style.border = '10px solid black';

    } else {
        alert('This is the beginning of my the gallery...');
    }
}