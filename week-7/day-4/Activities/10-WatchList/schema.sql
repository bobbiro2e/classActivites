create database moviePlanner_db;
use moviePlanner_db;
create table movies
(
    id int
    auto_increment not null,
    movie varchar
    (255),
        primary key
    (id)
);

    insert into movies
        (movie)
    values('captain fantastic') ;