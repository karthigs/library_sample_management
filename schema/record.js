const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
user_id: { type: Schema.Types.ObjectId, ref: 'User' },
book_id: { type: Schema.Types.ObjectId, ref: 'Book' }


});
module.exports = mongoose.model('Record', recordSchema);