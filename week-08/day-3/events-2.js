const btn = document.querySelector('button');

const items = function(){
    const li = document.querySelectorAll('li');
    const result = document.querySelector('.result');
    result.innerText = li.length;
}

btn.addEventListener('click', items);





