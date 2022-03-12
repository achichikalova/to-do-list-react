const express = require('express');
const app = express();

app.use(express.json());

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
      res.status(200).json({ tasks });
    })
    .catch(err => {
      console.log(err);
      res.status(500)
         .json({ error: err.message });
    })
})

app.listen(3001, () => {
  console.log('ToDo app listening on PORT 3001');
})