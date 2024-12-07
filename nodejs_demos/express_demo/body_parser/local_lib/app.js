const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//middleware to parse Json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//in memory  database for books 
let books =[
    {title :'1984' ,author :'George Gill' },
    {title :'MockingBird' ,author :'harperLee' },
];

app.use(express.static('public'));

//Route to display list of books 
app.get('/', (req, res) => {
    res.send(
      `  <h1>Library Books</h1>
        <ul> ${books.map(book=>`<li>${book.title} by ${book.author}</li>`).join('')}
        </ul>
            <form method="POST" action="/add-book">
            <input type="text" name="title" placeholder="Enter Book Title" required>
            <input type="text" name="author" placeholder="Author" required>
            <button type="submit">Add Book</button>

            </form>
       `
    );
});

// to add books 
app.post('/add-book', (req, res) => {
    const { title, author } = req.body;
    books.push({ title, author });
    res.redirect('/');
  });
//start server 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

