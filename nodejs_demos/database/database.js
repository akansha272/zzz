const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000;
//connectivity
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'AKin2721',
    database:'testdb',
    port:3306
});

db.connect((err)=>{
    if(err){console.error('Could not connect to the database', err.message);
        return;
    }console.log('Connected to the database');
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching users', error: err });
    }
    res.status(200).json(results); 
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting user', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});