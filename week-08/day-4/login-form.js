
'use strict'

let button = document.querySelector('button');
let password = document.querySelector('#password')

function validatePsw() {

    let isValid = password.value.lenght >= 8;
    if (!isValid) {
        alert('Password must be 8 characters');
    }
    return isValid;
}

button.addEventListener('click', validatePsw);
