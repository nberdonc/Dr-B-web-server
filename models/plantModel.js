const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plantSchema = new Schema({
    family: String,
    name: String,
    prcientificNameice: String,
    habitat: String,
    onFront: Boolean,
    composition: String,
    image: String,
    uses: String,

})

module.exports = mongoose.model('plants', plantSchema);

// image string or file