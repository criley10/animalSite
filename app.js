const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const fs = require('fs');
app.use(express.static(__dirname+'/views'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

Animals = require('./models/animals');

mongoose.connect('mongodb://localhost:27017/animals');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/animals', (req, res) =>{
    var collection = db.collection('animals');
    collection.find({}, {}).toArray(function(err, result){
        if(err) throw err;
        res.json(result);
    });
});

app.get('/animals/get/:id', (req, res) => {
    var collection = db.collection('animals');
    collection.find({'id': Number(req.params.id)}).toArray(function(err, result){
        if(err) throw err;
        res.json(result);
    });
});

app.get('/index', (req, res) =>{
    res.render('index');
});

app.get('/animals/test', (req, res) =>{
    var collection = db.collection('animals');
    collection.find({}, {}).toArray(function(err, result){
        if(err) throw err;
        res.send({animalsArray: result});
    });
});


app.listen(3000, () => console.log('Listening on port 3000....'));