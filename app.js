var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

Genre = require('./models/genres');
Book = require('./models/Book');

// Connect To Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req,res){
    res.send('Please use the API end point [ /api/books or /api/genres ]')
});

// get all genres
app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(genres);
    })
});

// post or add a genre
app.post('/api/genres', function(req, res){
    var genre = req.body;
    Genre.addGenres(genre, function(err, genre){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(genre);
    })
});

// update  one single record genre
app.put('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(genre);
    })
});

// Delete a Genre from the record
app.delete('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    Genre.removeGenre(id, function(err, genre){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(genre);
    })
});


// .......=================...............................===========...........//

// get all books
app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(books);
    })
});

// get a single book
app.get('/api/books/:_id', function(req, res){
    Book.getBookById(req.params._id, function(err, book){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(book);
    })
});

// post or add new book
app.post('/api/books', function(req, res){
    var book = req.body;
    Book.addBook(book, function(err, book){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(book);
    })
});

// update a book in the record
app.put('/api/books/:_id', function(req, res){
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function(err, book){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(book);
    })
});

// Delete a book from the record
app.delete('/api/books/:_id', function(req, res){
    var id = req.params._id;
    Book.removeBook(id, function(err, book){
        if (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            throw err;
        }
        res.json(book);
    })
});



app.listen(3000);
console.log('====================================');
console.log('Running on port 3000....');
console.log('====================================');
