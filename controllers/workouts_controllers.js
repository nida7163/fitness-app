// Node Dependencies
var express = require('express');
var router = express.Router();
var workout = require('../models/workouts.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all workouts to DOM)
router.get('/index', function (req, res) {
  workout.selectAll(function(data) {
    var hbsObject = { workouts: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a Workout
router.post('/workout/create', function (req, res) {
  workout.insertOne(req.body.workout_name, function() {
    res.redirect('/index');
  });
});


// Log workout
router.post('/workout/eat/:id', function (req, res) {
  workout.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------

console.log ();
// Export routes
module.exports = router;
