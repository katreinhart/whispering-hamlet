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
  .get((req, res) => {
    Preferences.find(function(err, prefs) {
      if(err)
        res.send(err);
      res.json(prefs)
    });
  });
router.route('/prefs')
    .post((req, res) => {
      var prefs = new Preferences();
      prefs.userName = req.body.name;
      prefs.createdAt = Date.now();
      prefs.preferences = req.body.preferences;
      prefs.save(function(err) {
        if (err)
          res.send(err);
        res.json({
          message: 'Prefs successfully added!'//,
          // customerID: prefs._uid
        });
      });
    });


module.exports = router;
