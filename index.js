const express = require('express');
const app = express();
const cors = require('cors');
const inclusionMetrics = require('./routes/inclusionMetrics');
const { apikeys, keyCheck } = require('./routes/apikeys');

const PORT = 5500;

const corsOptions = {
  origin: ['http://localhost:5500', 'https://specialdelivery.vercel.app/'],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
  keyCheck(req, res, next);
});

app.get('/', (req, res) => {
  res.send('Hello there we are up and running!');
});

app.use('/inclusionMetrics', inclusionMetrics);
app.use('/apikeys', apikeys);

app.listen(PORT, () => {
  console.log('server started on port 5500');
});
