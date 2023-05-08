const express = require('express');
const movies = require('./routes/movies');

const app = express();

const PORT = 5500;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there are we up and running?!');
});

app.use('/movies', movies);

app.listen(PORT, () => {
  console.log('server started on port 5500');
});
