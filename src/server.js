const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8081;
const table ='usuarios';

var connection  = mysql.createConnection({
  host: 'localhost',
  database: "faciales_db",
  user: "Admin_02", 
  password: "L5u9aA-@m/C3DgsK"
});

connection.connect();

connection.query(`select * from ${table}`, function(err, rows){
  if (err) throw err;
  console.log(rows.rows);
});

connection.end()

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/usuario/:id', (req, res) => {
  pool.query(`select * from ${table}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
    res.end();
  });
});

