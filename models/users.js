const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    surname: String,
    username: String,
    confirmpassword: String

})
module.exports = mongoose.model('user', userSchema, 'users')