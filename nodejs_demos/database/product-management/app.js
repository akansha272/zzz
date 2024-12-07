const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5000;

const db= mysql.createConnection({
    host:process.env.DB_HOST, 
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port :process.env.DB_PORT

});

db.connect((err)=>{
    if(err) throw err;
    console.log('connected to the database !!');
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));
//crud

//create a new product 
app.post('/product', (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
    
    db.execute(query, [name, description, price, stock], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error inserting product.');
      }
      res.redirect('/');
    });
  });


//Read all product 
app.get('/products',(req,res)=>{
    const query = 'select * from products';
    db.execute(query , (err,result)=>{
        if(err){
            console.log(err);
        return res.status(500).send('error fetching product');
        } res.json(result);
            
    });
});

//update product 
app.put('/api/products/:id', (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'update products srt name =? , description =? , price =? , stock=? where id=?';
    db.execute(query ,[name,description ,price,stock , req.params.id], (err,result)=>{
        if(err){
            console.log(err);
        return res.status(500).send('error updating product');
        }res.redirect('/');
            
    });

});

//delete a product 
app.delete('/product/:id',(req,res)=>{
    const query = 'delete from products where id=?';
    db.execute(query ,[req.params.id], (err,result)=>{
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting product.');
          }
          res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });