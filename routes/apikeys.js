const express = require('express');
const router = express.Router();
/* const {
  createApiKey,
  randomLetters,
  randomNumber,
  getStringFromDate,
} = require('../utils'); */

/* const key1 = createApiKey(
  getStringFromDate(),
  randomLetters(4),
  randomNumber()
);
console.log(typeof key1, key1); */

let apikeysArr = [123, 456, 789, 120, 102, 303, 404, 205];

// checking if api key is valid
const checkApikeyValidation = (req, res, next) => {
  const apikey = parseInt(req.query.apiKey);
  console.log(apikey);

  // Check if the given key is a valid key in our array of keys
  const keyIsValid = apikeysArr.find((k) => k === apikey);
  console.log(keyIsValid);

  // checking the key
  if (!keyIsValid) {
    return res
      .status(401)
      .send({ message: 'unouthorized, no valid api key', code: 401 });
  }
  next();
};

// check all keys, was not a part of the assignment, added it anyways
router.get('/', (req, res) => {
  res.json(apikeysArr);
});

// POST // adding a key from query createNewKey=<add new key>
router.post('/', (req, res) => {
  const apikey = parseInt(req.query.createNewApiKey);

  if (!apikey) {
    return res.status(400).json({
      code: 'Invalid input in query',
      message: 'No api key provided or not valid input, unable to create new key, api key has to be numbers',
    });
  }

  // check that key don't already exist in keys array
  const keyAlreadyInUse = apikeysArr.find((k) => k === apikey);
  if (keyAlreadyInUse) {
    return res.status(400).send({
      message:
        'Bad Request, unable to add key, please provide an other api key',
      error: 'Api key is already in use, please try a new api key',
    });
  }

  apikeysArr.push(apikey);
  res.json({
    message: `Successfully added a new api key: ${apikey}`,
    code: 201,
  });
});

// DELETE // delete an apikey using query
router.delete('/', (req, res) => {
  const apikey = apikeysArr.find((a) => a === parseInt(req.query.deleteApiKey));

  if (!apikey) {
    return res.status(404).json({
      message: 'You need to provide a valid api key',
      error: 'Invalid key in query',
    });
  }

  const filteredData = apikeysArr.filter((key) => key !== apikey);

  apikeysArr = filteredData;

  res.json(`Api key: ${apikey} successfully deleted`);
});

module.exports = {
  apikeys: router,
  keyCheck: checkApikeyValidation,
};
