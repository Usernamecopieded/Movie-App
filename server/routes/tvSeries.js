const express = require('express');
const router = express.Router();
const TvSeries = require('../models/TvSeries');

// Get all TV series
router.get('/', async (req, res) => {
  try {
    const tvSeries = await TvSeries.find();
    res.json(tvSeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new TV series
router.post('/', async (req, res) => {
  const tvSeries = new TvSeries({
    title: req.body.title,
    releaseYear: req.body.releaseYear,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newTvSeries = await tvSeries.save();
    res.status(201).json(newTvSeries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
