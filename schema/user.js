const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: String,
    email: String,
    address:String 
});

module.exports = mongoose.model('User', userSchema);