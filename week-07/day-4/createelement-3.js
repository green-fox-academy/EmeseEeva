'use strict'

const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

const newList = document.querySelector('#pets');

kids.forEach(e => {
    let newKidList = document.createElement('article');

    let ownerList = document.createElement('h3');
    ownerList.textContent = e.owner;

    let petList = document.createElement('p');
    petList.textContent = e.petName;

    newKidList.appendChild(ownerList);
    newKidList.appendChild(petList);
    newList.appendChild(newKidList);
});



