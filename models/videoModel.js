const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    onFront: Boolean,
    video: String,
})

module.exports = mongoose.model('admin', videoSchema);

//todo admin?