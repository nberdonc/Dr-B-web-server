
//Create a schema to have consistant data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;//assign schema method from mongoose to the variable Schema
const userSchema = new Schema({// we create a new instance of schema and we assign it to userSchema
    name: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean,

})
module.exports = mongoose.model('users', userSchema); //We export this "userSchema" by the name of "users" which defines the name of the collection in Mongo DB

