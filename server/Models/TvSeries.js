const mongoose = require('mongoose');

const tvSeriesSchema = new mongoose.Schema({
  title: String,
  releaseYear: String,
  imageUrl: String,
});

module.exports = mongoose.model('TvSeries', tvSeriesSchema);
