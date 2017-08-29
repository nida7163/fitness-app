// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 14 - Eat the Burger!



// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { training: data };
        //console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// Create a New Burger
router.post('/exercise_db/training/create', function(req, res) {
    burger.insertOne(req.body.workout, req.body.workout, req.body.sets, req.body.rep1, req.body.rep2, req.body.rep3,
        function() {
            res.redirect('/index');
        });
});


// Devour a Burger
router.post('/exercise_db/training:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});
// ----------------------------------------------------


// Export routes
module.exports = router;