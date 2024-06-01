CREATE DATABASE iberia_db;

USE iberia_db;

CREATE TABLE notes (
    id INT(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(250),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservaciones (
    id INT(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    apellido_pat VARCHAR(30),
    habitacion int(100),
    personas int(100),
    telefono VARCHAR(30),
    t_habitacion VARCHAR(100),
    precio int(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE habitacion (
    id INT(100) NOT NULL PRIMARY KEY,
    estado VARCHAR(100),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE notes;