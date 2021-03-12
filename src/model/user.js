const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  mobile: String,
  email: String,
  city: String
});

module.exports = mongoose.model('user', UserSchema);
