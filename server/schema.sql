DROP DATABASE IF EXISTS guesmi;
CREATE DATABASE IF NOT EXISTS guesmi;
USE guesmi;
CREATE TABLE IF NOT EXISTS mylist(
    id int(6) NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    age VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
insert into mylist(firstName,lastName,age) VALUES("jihed","abidi","25")
