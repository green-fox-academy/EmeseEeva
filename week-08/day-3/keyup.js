
window.addEventListener('keyup', (e) => {
    console.log(e);
    const h1 = document.querySelector('h1');
    h1.innerText = `Last pressed key code is : ${e.keyCode}`;
});