drop database if Exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers(
    id integer not null auto_increment,
    burger_name varchar(100) not null,
    devoured boolean not null,
    Primary key(id)
);