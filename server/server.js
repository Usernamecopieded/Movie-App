const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const moviesRoutes = require('./routes/movies');
const tvSeriesRoutes = require('./routes/tvSeries');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/api/movies', moviesRoutes);
app.use('/api/tv-series', tvSeriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
