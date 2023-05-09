const express = require('express');
const router = express.Router();
const apikeysArr = require('../apikeyData');

let apikeys = apikeysArr;

console.log(apikeysArr);

router.get('/', (req, res) => {
  res.json(apikeys);
});

router.get('/:id', (req, res) => {
  // converting string to number Id is number in apikey data
  const apikeyId = parseInt(req.params.id);
  const apikey = apikeys.find((key) => key.id === apikeyId);

  if (!apikeys) {
    return res.status(404).json({
      message: 'No apikeys found, error fetching data',
    });
  }

  res.json(apikey);
});

router.delete('/:id', (req, res) => {
  const apikeyId = parseInt(req.params.id);
  const apikey = apikeys.find((a) => a.id === apikeyId);

  const user = apikey.user;

  if (!apikey) {
    return res.status(404).json({
      message: 'No apikey with this id, please check the id or try an other.',
    });
  }

  const filteredData = apikeys.filter((apikey) => apikey.id !== apikeyId);

  apikeys = filteredData;

  res.json(
    `The apikey for user ${user} with the id: ${apikeyId} successfully removed`
  );
});

module.exports = router;
