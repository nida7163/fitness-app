-- @author: Thomas Thompson
-- @github: tomtom28
-- @comment: Homework 14 - Eat the Burger!


-- Database Creation
CREATE DATABASE IF NOT EXISTS DBName exercise_db;
USE exercise_db;
-- Table Creation
CREATE TABLE training(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
workout VARCHAR(50),
sets INTEGER(2),
rep1 INTEGER(3),
rep2 INTEGER(3),
rep3 INTEGER(3),
KilledIt BOOLEAN,
date TIMESTAMP);
