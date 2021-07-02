const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    onFront: Boolean,
    image:
    {
        data: Buffer,
        contentType: String
    },
})

module.exports = mongoose.model('books', bookSchema);
