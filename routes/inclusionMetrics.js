const express = require('express');
const router = express.Router();

const mockData = require('../db.json');

let inclusionMetrics = mockData;

//
router.get('/', (req, res) => {
  if (!res) {
    return res.status(404).json({
      message: 'No data found 404',
    });
  }
  res.json(inclusionMetrics);
});

// GET // get a team
router.get('/:team', (req, res) => {
  const teamName = req.params.team;

  const team = inclusionMetrics.find((t) => t.team === teamName);

  if (!team) {
    return res.status(404).json({
      message: 'No team with this team name was found, please try an other!',
    });
  }

  res.json(team);
});

module.exports = router;
