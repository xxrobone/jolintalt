const express = require('express');
const movies = require('./routes/movies');
const apikeysArray = require('./apikeyData');
const app = express();

const PORT = 5500;

app.use(express.json());

console.log(apikeysArray);

// checking if api key is valid
const authCheck = (req, res, next) => {
  const apikey = req.query.apikey;
  console.log(req.query);

  // checking the key function
  const checkApiKey = (obj) => obj.apikey === apikey;

  // logging the api key to check if it exists in the array
  console.log(apikeysArray.some(checkApiKey));

  if (!apikey) {
    return res
      .status(401)
      .send({ message: "Can't connect to server, No api key", code: 401 });
  }

  // using the checkApiKey function to check if obj key value exists in the key array
  if (apikeysArray.some(checkApiKey)) {
    next();
  } else {
    return res.status(403).send({ message: 'invalid api key' });
  }
};

app.use((req, res, next) => {
  authCheck(req, res, next);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello there are we up and running?!');
});

app.use('/movies', movies);

app.listen(PORT, () => {
  console.log('server started on port 5500');
});
