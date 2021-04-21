CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS people (
    id int primary key auto_increment,
    name varchar(255)
);

INSERT INTO people (name) values ('Fulano'), ('Ciclano'), ('Beltrano');