const express = require('express');
const path = require('path');
const bp = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bp());

const multiply = (par) => {
    let multi = 1;
    for (let i = 1; i <= par.length; i++) {
        multi *= i;
    }
    return multi;
};

const sum = (par) => {
    let summa = 0;
    for (let i = 0; i <= par.length; i++) {
        summa += i;
    }
    return summa;
};

const double = (par) => {
    let newArray = [];
    for (let i = 1; i <= par.length; i++) {
        newArray.push(i * 2)
    }
    return newArray;
};

app.post('/array/:input', (req, res) => {
    const input = req.params.input;
    if (input == 'sum') {
        res.json({ 'result': sum(req.body.until) });
    } else if (input == 'multiply') {
        res.json({ 'result': multiply(req.body.until) });
    } else if (input == 'double') {
        res.json({ 'result': double(req.body.until) });
    } else {
        res.json({ 'error': 'Please provide what to do with the numbers!' });
    }
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});