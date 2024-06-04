const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  releaseYear: String,
  imageUrl: String,
});

module.exports = mongoose.model('Movie', movieSchema);
