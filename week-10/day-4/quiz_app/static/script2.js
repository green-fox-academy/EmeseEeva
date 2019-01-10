const container = document.querySelector('.container');

const xhr = new XMLHttpRequest();
xhr.open('GET', '/question');
xhr.onload = () => {
    if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        getAllQuestions(res);
       
    }
}
xhr.send();

const getAllQuestions = (res) => {

res.forEach((e,i) => {
    console.log(e);
    const questions = document.createElement('h2');
    questions.innerText = e.question;
    const link = document.createElement('a');
    link.innerText = 'Delete';
    link.setAttribute('id',e.id);
    link.setAttribute('href','#');
    container.appendChild(questions);
    questions.appendChild(link);
});
}

container.addEventListener('click', (event) => {
    event.preventDefault();
    const deleteXhR = new XMLHttpRequest();
    deleteXhR.open('DELETE', '/question');
    deleteXhR.setRequestHeader('Content-Type', 'application/json');
    deleteXhR.send(JSON.stringify({
      id : event.target.id
    }));
    deleteXhR.onload = () => {
      console.log(JSON.parse(deleteXhR.responseText));
    }
  });
  