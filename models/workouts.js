
// Node Dependency
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using workout specific input for the ORM.
var workout = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(workout_name, callback){
    orm.insertOne(workout_name, function(res){
      callback(res);
    });
  },

  updateOne: function(workout_id, callback){
    orm.updateOne(workout_id, function(res){
      callback(res);
    });
  }

};


// Export at the end of the workouts.js file.
module.exports = workout;
