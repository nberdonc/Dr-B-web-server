const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    onFront: Boolean,
    image: String,
})

module.exports = mongoose.model('books', bookSchema);

// image string or file