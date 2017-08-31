
-- Database Creation
CREATE DATABASE workouts_db;

USE workouts_db;


-- Table Creation
CREATE TABLE workouts(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
workout_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);
