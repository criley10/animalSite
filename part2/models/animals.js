const mongoose = require('mongoose');

// Animals Schema
const Schema = mongoose.Schema;
const animalsSchema = new Schema({
    id: Number,
    abv: String,
    name: String,
    des: String
});
const animalsModel = module.exports = mongoose.model('animalsModel', animalsSchema );

// Get Animals
module.exports.getAnimals = function(callback, limit){
    animalsModel.collection('animals').find(callback).limit(limit);
}