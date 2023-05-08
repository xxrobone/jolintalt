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

router.delete('/:id', (req, res) => {
  const movieID = req.params.id;
  const movie = movies.find((m) => m.imdbID === movieID);

  // taking out the title from the movie to show in response
  let title = movie.Title;

  if (!movie) {
    return res.status(404).json({
      message: 'No movie with this id was found, please try an other!',
    });
  }

  const filteredData = movies.filter((movie) => movie.imdbID !== movieID);

  movies = filteredData;

  res.json(`The movie ${title} with the id: ${movieID} successfully removed`);
});

/* router.post('/', (req, res) => {
  const movie = req.body.movie;
    let randomIdNum = Math.floor(Math.random() * 10000000 + 1);

  let nextId = `tt${randomIdNum}`;
  console.log(nextId);

  const newMovie = {
    ...movie
  };
console.log(newMovie)

}); */

router.post('/', (req, res) => {
  const movie = req.body;

/*   let randomIdNum = Math.floor(Math.random() * 10000000 + 1);

  let nextId = `tt${randomIdNum}`;
  console.log(nextId); */

  const newMovie = {
    ...movie,
  };

  console.log(newMovie)

 /*  nextId++; */

  movies.push(newMovie);
  res.json(newMovie);
});

module.exports = router;
