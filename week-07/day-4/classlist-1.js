const replacePara = document.querySelectorAll('p');
replacePara.forEach((e) => {
    if (e.textContent == 'dolphin') {
        replacePara[0].textContent = 'pear';
    }
    if (replacePara[0].className == 'apple') {
        replacePara[2].textContent = 'dog';
    }
});

const makeRed = document.querySelector('.apple');
makeRed.classList.add('red');

const changeBalloon = document.querySelector('.balloon');
changeBalloon.style.borderRadius = '20px';