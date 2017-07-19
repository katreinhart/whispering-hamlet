const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const apiRouter = require('../api') ;
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const DB_LOGIN = process.env.DB_LOGIN || require('../config.js').dbLogin;
const DB_PATH = process.env.DB_PATH || require('../config.js').dbPath;

mongoose.connect(`mongodb://${DB_LOGIN}@${DB_PATH}/kat-mern-comment-box`);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(cors);

app.use('/api', apiRouter);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
