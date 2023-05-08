const express = require('express');
const router = express.Router();

const mockData = require('../mockData');

let movies = mockData;

// movies is set in the endpoint in the index file
router.get('/', (req, res) => {
  res.json(movies);
});

router.get('/:id', (req, res) => {
  const movieID = req.params.id;
  const movie = movies.find((m) => m.imdbID === movieID);

  if (!movies) {
    return res.status(404).json({
      message: 'No movie with this id was found, please try an other!',
    });
  }

  res.json(movie);
});

module.exports = router;
