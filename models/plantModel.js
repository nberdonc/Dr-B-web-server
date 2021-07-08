const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plantSchema = new Schema({
    cientificName: String,
    synonym: String,
    family: String,
    habitat: String,
    onFront: Boolean,
    composition: String,
    uses: String,
    image:
    {
        data: Buffer,
        contentType: String
    },

})

module.exports = mongoose.model('plants', plantSchema);
