const express = require('express');
const router = express.Router();
const apikeysArr = require('../apikeyData')

let apikeys = apikeysArr;

router.get('/', (req, res) => {
    res.json(apikeys);
});
  
module.exports = router;