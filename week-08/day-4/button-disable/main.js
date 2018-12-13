'use strict'

let form = document.forms.myForm;
let pet = form.pet;
let yesOrNo = form.yesorno;
let wantCats = document.querySelector('.cats');
let signUp = document.querySelector('.signup');
let button = document.querySelectorAll('button');

console.log(pet.value);

form.addEventListener('change', () => {
    if (pet.value === 'dog' || pet.value === 'cat' || (pet.id === 'viktor' && yesOrNo.id === 'no')) {
        signUp.removeAttribute('disabled');
    } else {
        signUp.disabled = 'true';
    }

    if (yesOrNo.value === 'yes') {
        wantCats.removeAttribute('disabled');
    } else {
        wantCats.disabled = 'true';
    }
});

button.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        if (yesOrNo.id === 'no' && pet.id === 'viktor') {
            alert('Sigh, we still added you to the cat facts');
        } else {
            alert('thank you, you successfully signed up for cat facts');
        }
    });
});
