const express = require('express') ;

const Preferences = require('../model/prefs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();

router.use(bodyParser.json());
// router.use(bodyParser.urlEncoded({
//   extended: true
// }));

router.get('/', (req, res) => {
  res.send({ message: 'API Initialized!'});
});

router.route('/prefs')
  .get(function(req, res) {
    Preferences.find(function(err, prefs) {
      if(err)
        res.send(err);
      res.json(prefs)
    });
  });


module.exports = router;
