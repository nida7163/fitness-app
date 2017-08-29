// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 14 - Eat the Burger!



// Node Dependency
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
var training = {

    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(workout, sets, rep1, rep2, rep3, KilledIt, date, callback) {
        orm.insertOne(workout, sets, rep1, rep2, rep3, KilledIt, date, function(res) {
            callback(res);
        });
    },

    updateOne: function(workout, sets, rep1, rep2, rep3, KilledIt, date, callback) {
        orm.updateOne(workout, sets, rep1, rep2, rep3, KilledIt, date, function(res) {
            callback(res);
        });
    }

};


// Export at the end of the burger.js file.
module.exports = training;