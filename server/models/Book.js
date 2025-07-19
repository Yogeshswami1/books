const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  status: String,  // Reading, Completed, Wishlist
  rating: Number
});

module.exports = mongoose.model('Book', bookSchema);
