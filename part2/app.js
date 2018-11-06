const express = require('express');
const app = express();
const mongoose = require('mongoose');

Animals = require('./models/animals');

mongoose.connect('mongodb://localhost:27017/animals');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) =>{
    var collection = db.collection('animals');
    collection.find({}).toArray(function(err, result){
        if(err) throw err;
        res.json(result);
    });
});

app.get('/:id', (req, res) => {
    var collection = db.collection('animals');
    collection.find({'id': Number(req.params.id)}).toArray(function(err, result){
        if(err) throw err;
        res.json(result);
    })
});


app.listen(3000, () => console.log('Listening on port 3000....'));