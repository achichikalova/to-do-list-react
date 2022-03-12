const express = require('express');
const app = express();

// Connect db
const { Pool } = require('pg');
const dbConfig = require('./dbConfig');
const db = new Pool(dbConfig);

app.get('/', (req, res) => {

})



app.listen(3001, () => {
  console.log('ToDo app listening on PORT 3001');
})