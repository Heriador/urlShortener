require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./database/database');

const {
  CreateShorturl,
  GetShortUrl,
} = require('./controller/shorturl.controller');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', CreateShorturl);
app.get('/api/shorturl/:shorturl', GetShortUrl);

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

sequelize.sync().then();
