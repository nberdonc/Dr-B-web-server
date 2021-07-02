const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plantSchema = new Schema({
    family: String,
    name: String,
    cientificName: String,
    habitat: String,
    onFront: Boolean,
    composition: String,
    image: String,
    uses: Buffer,

})

module.exports = mongoose.model('plants', plantSchema);
