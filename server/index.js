const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const apiRouter = require('../api') ;

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(`mongodb://kat-test:asdf1234@ds157621.mlab.com:57621/kat-mern-comment-box`);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


app.use('/api', apiRouter);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
