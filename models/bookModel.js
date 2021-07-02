const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    onFront: Boolean,
    image: Buffer,
})

module.exports = mongoose.model('books', bookSchema);
