const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config('./.env');

// db connection
require('./db');

const routes = require('./routes');
app.use('/api', routes);

app.use('*', (req, res) => {
  return res.status(404).json({ message: 'page Not Found' });
});

app.listen(port, () => {
  console.log('app is running');
});
