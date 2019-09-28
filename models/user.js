const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: 'user123',
    password: '1234',
    firstName: 'Jon',
    lastName: 'Doe',
    dob: '12/11/1991',
    email: 'user@gmail.com',
});

module.exports = mongoose.model("User", userSchema);