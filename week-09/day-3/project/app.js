const express = require('express');
const path = require('path');
const bp = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bp());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const input = req.query.input;
  if (input) {
    const resObject = {
      'received': input,
      'result': input * 2
    }
    res.json(resObject);
  } else {
    res.json({ 'error': 'please provide an input' });
  }
});

app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;

  if (name && title) {
    const resObject = {
      'welcome message': `Oh, hi there ${name}, my dear ${title}!`
    }
    res.json(resObject);
  } else {
    res.json({ 'error': 'please provide an name and title' });
  }
});

app.get('/appenda/:input', (req, res) => {
  const input = req.params.input;
  if (input) {
    const resObject = {
      'appended': input + 'a'
    }
    res.json(resObject);
  } else {
    res.json({ 'error': '404' });
  }
});

const fact = (par) => {
  if (par === 0) {
    return 1;
  } else { return par * fact(par - 1); }
};

const sum = (par) => {
  let summa = 0;
  for (let i = 0; i <= par; i++) {
    summa += i;
  }
  return summa;
};

app.post('/dountil/:input', (req, res) => {
  const input = req.params.input;
  if (input == 'sum') {
    res.json({ 'result': sum(req.body.until) });
  } else if (input == 'factorial') {
    res.json({ 'result': fact(req.body.until) });
  } else {
    res.json({ 'error': 'Please provide a number!' });
  }
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});