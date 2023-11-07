const express = require('express');
const app = express();
const cors = require('cors');
const inclusionMetrics = require('./routes/inclusionScoreMetrics');
const demographicInclusionMetrics = require('./routes/demographicInclusion');
const demographicTimelineMetrics = require('./routes/demographicTimeline');

const PORT = 5500;

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5500',
    'https://develop-jolint.vercel.app',
    'https://jolint.vercel.app',
  ],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there we are up and running!');
});

app.use('/inclusionscore', inclusionMetrics);
app.use('/demographic-inclusion', demographicInclusionMetrics);
app.use('/demographic-timeline', demographicTimelineMetrics);

app.listen(PORT, () => {
  console.log('server started on port 5500');
});
