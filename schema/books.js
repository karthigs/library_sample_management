const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
    book_name: String,
    author: String,
    language:String,
    genar: String
});

module.exports = mongoose.model('Book', bookSchema);