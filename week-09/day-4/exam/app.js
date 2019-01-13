const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
    port: 3306,
    user: 'root',
    password: 'Corgi1118',
    database: 'url_short'
});

conn.connect(err => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('Connected to database', '\n');
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/api/links', (req, res) => {
    const { url, alias } = req.body;
    const secretCode = Math.floor(1000 + Math.random() * 9000);
    const sql = `INSERT INTO urls (url, alias, hitCount, secretCode) VALUES ('${url}', '${alias}', 0, '${secretCode}');`;
    conn.query(sql, (err, data) => {
        if (err) {
            res.status(400).json({
                error: 'Your alias is already in use!',
            });
            return;
        } else {
            res.status(200).json({
                'id': data.insertId,
                'url': url,
                'alias': alias,
                'hitCount': 0,
                'secretCode': secretCode
            });
        }
    });
});

app.get('/a/:alias', (req, res) => {
    const { alias } = req.params;
    conn.query('SELECT * FROM urls;', (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'internal server error'
        });
        return;
      } else {
        const result = rows.find(row => row.alias == alias);
        if (result == undefined) {
          res.status(404).json({
            error: "alias doesn't exist"
          });
          return;
        } else {
          conn.query(`UPDATE urls SET hitCount = hitCount + 1 WHERE alias = '${alias}';`, (err, rows) => {
            if (err) {
              console.log(err.message);
              res.status(500).json({
                error: 'internal server error'
              });
              return;
            } else {
              const redirUrl = result.url;
              res.status(301).redirect(redirUrl);
            }
          });
        }
      }
    });
  });
  

app.get('/api/links', (req, res) => {
    const sqlQuery = 'SELECT id, url, alias, hitCount FROM urls;';
    conn.query(sqlQuery, (err, rows) => {
        if (err) {
            res.status(400);
        } else {
            res.json(rows);
        }
    });
});

app.delete('/api/links/:id', (req, res) => {
    const { id } = req.params;
    const { secretCode } = req.body;
    const sql = 'SELECT * FROM urls;';
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            res.status(500).json({
                error: 'Internal server error'
            });
            return;
        }
        const codeData = rows.find(data => data.id == id);
       
        if (codeData == undefined) {
            res.status(404).json({
                error: 'ID does not exist'
            });
        } else if (codeData.secretCode != secretCode) {
            res.status(403).json({
                error: 'ID does not match'
            });
        } else {
            conn.query(`DELETE FROM urls WHERE id = '${id}';`, (err, row) => {
                if (err) {
                    console.log(err.message);
                    res.status(500).json({
                        error: 'Internal server error'
                    });
                    return;
                }
                res.status(204).json({
                    message: 'Succesfully deleted'
                });
            });
        }
    });
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});