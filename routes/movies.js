const express = require('express');
const router = express.Router();

const mockData = require('../mockData');

let movies = mockData;

router.get('/', (req, res) => {
  res.json(movies);
});

module.exports = router;
