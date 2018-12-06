const party = document.querySelector('body');
const button = document.querySelector('button');

button.onclick = () => {

    if (party.className === 'party') {
        party.className = '';
    } else {
        party.className = 'party';
    }
    console.log(party.className);
}
