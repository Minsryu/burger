CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    data TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name,devoured)
VALUE("in n sdfe", 0 );


UPDATE burgers SET devoured = 0 WHERE id = 2;

SELECT * FROM burgers WHERE devoured = 0;

SELECT * FROM burgers; 



UPDATE burgers SET devoured = 1 WHERE id = 2;