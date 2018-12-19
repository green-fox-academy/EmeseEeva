const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

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


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});