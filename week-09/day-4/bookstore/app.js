const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bp = require('body-parser');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Corgi1118',
    database: 'bookinfo'
});


conn.connect(err => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('Connected to database', '\n');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/assets', express.static('assets'));

app.use(bp());



app.get('/books', (req, res) => {
    const selectAll = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM ((book_mast INNER JOIN author ON book_mast.aut_id=author.aut_id) INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id) INNER JOIN category ON book_mast.cate_id=category.cate_id;`
    conn.query(selectAll, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
});

app.get('/categselect', (req, res) => {
    conn.query('SELECT cate_descrip FROM category;', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
});

app.get('/publisherselect', (req, res) => {
    conn.query('SELECT pub_name FROM publisher;', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
});

app.post('/filter', (req, res) => {
    const { categ_name, pub_name, price_range } = req.body;
    let sql = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM publisher, book_mast, category, author WHERE book_mast.aut_id=author.aut_id AND book_mast.pub_id=publisher.pub_id AND book_mast.cate_id=category.cate_id`;
    if (categ_name && categ_name != '' && categ_name != undefined) {
        if (categ_name != 'all') {
            sql += ` AND cate_descrip = '${categ_name}'`;
        }
    }
    if (pub_name && pub_name != '' && pub_name != undefined) {
        if (pub_name != 'all') {
            sql += ` AND pub_name = '${pub_name}'`;
        }
    }
    if (price_range && price_range != '' && price_range != undefined) {
        sql += ` AND book_price <= '${price_range}'`;
    }
    sql += ';';

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
});

/*const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';
const getCategory = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE category.cate_descrip = ?;';
const getPublisher = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id AND publisher.pub_name = ?;';
const getAuthor = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id AND author.aut_name = ?;';

const category = req.query.category;
const publisher = req.query.publisher;
const author = req.query.author;

if (category) {
    conn.query(getCategory, category, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        } else {
            res.json(data);
        }
    });
}

if (publisher) {
    conn.query(getPublisher, publisher, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        } else {
            res.json(data);
        }
    });
}
if (author) {
    conn.query(getAuthor, author, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        } else {
            res.json({ data });
        }
    });
}else {
    conn.query(getAllBooks, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        } else {
            res.json({ data });
        }
    });
}
});
*/

app.listen(PORT, () => console.log(`Sever started on port: ${PORT}`));