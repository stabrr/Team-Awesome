### Schema
DROP DATABASE IF EXISTS memory_db;
CREATE DATABASE memory_db;
USE memory_db;

CREATE TABLE users
(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(40) NOT NULL,
	user_password VARCHAR(30) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE themes
(
	theme_id INT NOT NULL AUTO_INCREMENT,
    descr VARCHAR(100) NOT NULL,
    author INT,
    create_date DATE,
    game_level VARCHAR(30),
    FOREIGN KEY(author) REFERENCES users(user_id),
    PRIMARY KEY (theme_id) 
);

CREATE TABLE scores
(
	score_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
	score TIME,
    date_time DATETIME,
    theme_id INT,
    flip_speed INT,
    card_count INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(theme_id) REFERENCES themes(theme_id),
    PRIMARY KEY (score_id)
);

CREATE TABLE cards
(
	card_id INT NOT NULL AUTO_INCREMENT,
    descr VARCHAR(100) NOT NULL,
    theme_id INT,
	image BLOB,
    image_url VARCHAR(255),
    FOREIGN KEY(theme_id) REFERENCES themes(theme_id),
	PRIMARY KEY (card_id)
);
