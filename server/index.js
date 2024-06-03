const express = require('express');
const cors = require('cors');
const connectDB = require('../database/db');
const moviesRoutes = require('./routes/movies');
const tvSeriesRoutes = require('./routes/tvSeries');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/movies', moviesRoutes);
app.use('/api/tv-series', tvSeriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
