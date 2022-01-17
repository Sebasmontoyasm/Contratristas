CREATE DATABASE ng_contratistas_db;

USE ng_games_db;

CREATE TABLE vigencia(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nit INT (11) NOT NULL,
    nameE VARCHAR(180),
    descripcion VARCHAR(250),
    fechaI DATE,
    fechaF DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE game;
