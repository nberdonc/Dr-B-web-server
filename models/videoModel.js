const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    onFront: Boolean,
    video:
    {
        data: Buffer,
        contentType: String
    },
})

module.exports = mongoose.model('videos', videoSchema);
