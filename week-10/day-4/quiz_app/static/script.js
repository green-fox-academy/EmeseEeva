const questionBox = document.querySelector('.box');
let score = document.querySelector('#score');

const getQuestion = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/game');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            createBox(response);
        }
    }
    xhr.send()
}

const createBox = (response) => {
    questionBox.innerHTML = '';

    let newQuestion = document.createElement('h2');
    newQuestion.innerHTML = response.question;
    questionBox.appendChild(newQuestion);

    response.answers.forEach(option => {
        let newButton = document.createElement('button');
        newButton.innerHTML = option.answer;
        newButton.addEventListener('click', () => {
            if (option.is_correct === 1) {
                newButton.setAttribute('style', 'background-color: green');
                let scoreBefore = score.textContent;
                score.textContent = parseInt(scoreBefore) + 1;
            } else {
                newButton.setAttribute('style', 'background-color: red');
            }
            setTimeout(() => {
                getQuestion();
            }, 3000);
        });
        questionBox.appendChild(newButton);
    });
}
getQuestion(); 