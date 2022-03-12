const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Set middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect db
const { Pool } = require('pg');
const dbConfig = require('./dbConfig');
const db = new Pool(dbConfig);

app.get('/', (req, res) => {
  res.send('Test');
})

app.get('/api/tasks', (req, res) => {
  const query = `SELECT * FROM tasks;`;

  db.query(query)
    .then(data => {
      const tasks = data.rows;
      res.status(200)
         .json({ tasks });
    })
    .catch(err => {
      res.status(500)
         .json({ error: err.message });
    })
})

app.post('/api/tasks', (req, res) => {
  const { text, id, complete } = req.body;
  console.log(text, id, complete)
  const query = `INSERT INTO tasks (text, id, complete) VALUES ($1, $2, $3);`;
  const queryParams = [text, id, complete];

  db.query(query, queryParams)
    .then(() => {
      res.status(200)
         .json({ success: true });
    })
    .catch(err => {
      res.status(500)
         .send({ error: err.message });
    })
})

app.listen(3001, () => {
  console.log('ToDo app listening on PORT 3001');
})