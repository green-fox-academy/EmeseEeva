const button = document.querySelector('button');
const paragraph = document.querySelector('p');

const printText = () => {
    setTimeout(() => {
        paragraph.innerText = '2 seconds ellapsed';
    }, 2000);
}

button.addEventListener('click', printText);