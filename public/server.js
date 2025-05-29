const express = require('express');
const axios = require('axios');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// SECURITY: Store your API key in an environment variable, not in code
const TMDB_API_KEY = process.env.TMDB_API_KEY;
if (!TMDB_API_KEY) {
  throw new Error('TMDB_API_KEY environment variable is not set.');
}

// SECURITY: Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// SECURITY: Content Security Policy header
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https://image.tmdb.org; script-src 'self'"
  );
  next();
});

// API endpoint to fetch trending movies
app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data.results);
  } catch (err) {
    console.error('TMDb API error:', err.response ? err.response.data : err.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});
// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

console.log('TMDB_API_KEY:', TMDB_API_KEY);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});