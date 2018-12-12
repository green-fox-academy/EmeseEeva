'use strict'

const button = document.querySelector('button');

/*button.addEventListener('click', (e) => {
    console.log(e.timeStamp);
    button.disabled = true;
});
*/

const clicker = () => {
    console.log(Date.now());
    button.removeEventListener('click', clicker);
}

button.addEventListener('click', clicker);