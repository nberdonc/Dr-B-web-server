const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    onFront: Boolean,
    image: Buffer,
})

module.exports = mongoose.model('courses', courseSchema);
