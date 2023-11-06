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

// GET // get a data by id
router.get('/:gender', (req, res) => {
    const gender = req.params.gender;
  
    const dataByGender = demographicTimeline.find((m) => m.demographic_category === gender);
  
    if (!dataByGender) {
      return res.status(404).json({
        message: 'No data with this id was found, please try an other!',
      });
    }
  
    res.json(dataByGender);
  });

module.exports = router;
