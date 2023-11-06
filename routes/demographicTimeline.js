const express = require('express');
const router = express.Router();

const mockData = require('../demographictimeline.json');

let demographicTimeline = mockData;

//
router.get('/', (req, res) => {
  if (!res) {
    return res.status(404).json({
      message: 'No data found 404',
    });
  }
  res.json(demographicTimeline);
});


module.exports = router;