const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  dob: Date,
  email: String,
});

module.exports = mongoose.model('User', userSchema);
