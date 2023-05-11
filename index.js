const express = require('express');
const app = express();
const cors = require("cors");
const movies = require('./routes/movies');
const {apikeys, keyCheck} = require('./routes/apikeys');


const PORT = 5500;

const corsOptions = {
  origin: "http://localhost:5500", 
};

app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
  keyCheck(req, res, next);

});

app.get('/', (req, res) => {
  res.send('Hello there are we are up and running?!');
});

app.use('/movies', movies);
app.use('/apikeys', apikeys);

app.listen(PORT, () => {
  console.log('server started on port 5500');
});


