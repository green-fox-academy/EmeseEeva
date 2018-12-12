
let btn = document.querySelector('button');
let body = document.querySelector('body');

let count = 0;
let callback = (e) => {
    if (e.timeStamp <= 5000) {
        btn.disabled = true;
    } else if (e.timeStamp  > 5000 && count === 2) {
        setTimeout(() => {
            let p = document.createElement('p');
            p.innerText = '5 seconds elapsed and clicked 3 times';
            body.appendChild(p);
        }, 5000);
    }
    count++;
}
btn.addEventListener("click", callback);