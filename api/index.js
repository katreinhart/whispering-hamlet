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
  })
  .post((req, res) => {
      var prefs = new Preferences();
      prefs.userName = req.body.name;
      prefs.createdAt = Date.now();
      prefs.preferences = req.body.preferences;
      prefs.save(function(err) {
        if (err)
          res.send(err);
        res.json({
          message: 'Prefs successfully added!'
        });
      });
    });

    router.route('/prefs/:id')
      .get(function(req, res) {
        let uid = mongoose.Types.ObjectId( req.params.id );
        Preferences.findById(req.params.id, (err, pref) => {
          if(!pref) res.json({ error: 'Entry not found'});
          if(err) res.send(err);
          res.send(pref);
        });
      })
      .put(function(req, res) {
        let uid = mongoose.Types.ObjectId( req.params.id );
        Preferences.findById(uid, function (err, pref) {
          if(err) res.send(err);
          (req.body.userName) ? pref.name = req.body.userName : null;
          (req.body.preferences) ? pref.preferences = req.body.preferences : null;

          // This is sending even if the comment isn't updated.
          pref.save(function(err) {
            if(err)
              res.send(err);
            res.json({ message: 'Comment has been updated'});
          });
        });
      })
      .delete(function(req, res) {
        let uid = mongoose.Types.ObjectId( req.params.id );

        Preferences.remove({ _id: req.params.id }, (err, pref) => {
          if(err) res.send(err);
          res.json({ message: 'Comment has been deleted'});
        });
      });

module.exports = router;
