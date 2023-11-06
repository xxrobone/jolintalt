const express = require('express');
const router = express.Router();

const mockData = require('../demographicInclusion.json');

let demographicInclusion = mockData;

//
router.get('/', (req, res) => {
  if (!res) {
    return res.status(404).json({
      message: 'No data found 404',
    });
  }
  res.json(demographicInclusion);
});

module.exports = router;
