const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
  name: String,
  value: Number,
  userId: String,
  dueDate: Number,
  category: String
});

module.exports = mongoose.model('Bill', billSchema);
