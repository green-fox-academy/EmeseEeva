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
    database: 'quiz_app'
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

app.get('/questions', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});


app.get('/game', (req, res) => {
    const sqlQuestion = 'select * from questions order by rand() limit 1;';
    conn.query(sqlQuestion, (err, rows) => {
        if (err) {
            console.log(err.message);
            res.status(500).send();
        } else {
            const sqlAnswer =`select * from answers where question_id='${rows[0].id}';`;
            conn.query(sqlAnswer, (err, data) => {
                if (err) {
                    console.log(err.message);
                    res.status(500).send();
                } else {
                    const resObject = {
                        'id': rows[0].id,
                        'question': rows[0].question,
                        'answers': data
                    }
                    res.json(resObject)
                }
            });
        }
        console.log(rows);
    });
});

app.get('/question', (req, res) => {
    const sqlQuery = 'SELECT * FROM questions;';
    conn.query(sqlQuery, (err, rows) => {
        if (err) {
            res.status(400);
        } else {
            res.json(rows);
        }
    });
});

app.delete('/question', (req, res) => {
    const { id } = req.body;
    const sqlDelete = `SELECT * FROM questions`;
    conn.query(sqlDelete, (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        if (rows.find(element => element.id == id)) {
            conn.query(`DELETE FROM questions WHERE id = '${id}';`, (err, data) => {
              if (err) {
                console.log(err.message);
                res.status(500).json({
                  error: 'Internal server error'
                });
                return;
              }
              res.json({
                message: 'Succesfully deleted'
              });
            });
          } else {
            res.json({
              message: 'Wrong ID'
            });
          }
        });
})

app.post('/question', (req,res) => {
    const { question, answer1, answer2, answer3, answer4, correct } = req.body;
    const sql = `INSERT INTO questions (question) VALUES ('${question}');`;
    conn.query(sql, (err, rows) => {
      if(err) {
        console.log(err.message);
        res.status(500).json({error: 'Internal server error'});
        return;
      } 
      let addSql;
      switch(correct){
        case '1':
        addSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,1), (?,?,0), (?,?,0), (?,?,0);`;
        break;
        case '2':
        addSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,0), (?,?,1), (?,?,0), (?,?,0);`;
        break;
        case '3':
        addSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,0), (?,?,0), (?,?,1), (?,?,0);`;
        break;
        case '4':
        addSql = `INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,0), (?,?,0), (?,?,0), (?,?,1);`;
        break;
      }
      conn.query(addSql, [rows.insertId, answer1, rows.insertId, answer2, rows.insertId, answer3, rows.insertId, answer4], (anerr, andata) => {
        if(err) {
          console.log(err.message);
          res.status(500).json({error: 'Internal server error'});
          return;
        } 
        res.status(200).json({message: 'Succesfully added to database'});
      })
    });
  })


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
