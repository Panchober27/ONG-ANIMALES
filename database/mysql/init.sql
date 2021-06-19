-- Archivo de creacion de la base de datos.

-- Creacion de la base de datos ¡¡¡Solo de manera local!!!
CREATE DATABASE ong_animales;
USE ong_animales;


-- Creacion de tablas.
-- Tablas que generan la tabla ubicacion y atributo direccion
CREATE TABLE region (
    cod_region INT(3) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL
);
CREATE TABLE ciudad (
    cod_ciudad INT(3) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    cod_region INT(3) NOT NULL,
    CONSTRAINT fk_ciudad FOREIGN KEY (cod_region) REFERENCES region (cod_region)
);
CREATE TABLE comuna (
    cod_comuna INT(3) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    cod_ciudad INT(3) NOT NULL,
    CONSTRAINT fk_comuna FOREIGN KEY (cod_ciudad) REFERENCES ciudad (cod_ciudad)
);

-- Tabla de la ubicacion de rescate del animal o animales.
CREATE TABLE ubicacion (
    id_ucib INT(3) PRIMARY KEY AUTO_INCREMENT,
    direccion VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    cod_comuna INT(3) NOT NULL,
    CONSTRAINT fk_ubicacion FOREIGN KEY (cod_comuna) REFERENCES comuna (cod_comuna)
);


-- Tabla de los animales.
CREATE TABLE animal (
    id_animal INT(3) PRIMARY KEY AUTO_INCREMENT,
    especie_animal VARCHAR(255) NOT NULL,
    nombre_animal VARCHAR(255) NOT NULL,
    edad INT(3) NOT NULL,
    direccion_rescate VARCHAR(255) NOT NULL,
    cod_comuna INT(3) NOT NULL,
    CONSTRAINT fk_animal FOREIGN KEY (cod_comuna) REFERENCES comuna (cod_comuna)
);



-- Tabla con los usuarios del sistema.
CREATE TABLE usuario (
    id_user INT(3) PRIMARY KEY AUTO_INCREMENT,
    rut_user VARCHAR(255) NOT NULL,
    nom_user VARCHAR(255) NOT NULL,
    ape_user VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    email_user VARCHAR(255) NOT NULL,
    contrato !!!!
    cod_comuna INT(3) NOT NULL,
    CONSTRAINT fk_usuario FOREIGN KEY (cod_comuna) REFERENCES comuna (cod_comuna)
);


-- Tabla de los telefono de usuarios.
CREATE TABLE telefonos_usuarios (
    id_telefono_user INT(3) PRIMARY KEY AUTO_INCREMENT,
    tipo_telefono VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    id_user INT(3) NOT NULL,
    CONSTRAINT fk_telefono_user FOREIGN KEY (id_user) REFERENCES usuario (id_user)
);


-- LLave Compuesta???
-- Crear llave compuesta con id_animal y id_user ??
CREATE TABLE contrato (
    id_contrato INT(3) PRIMARY KEY AUTO_INCREMENT,
    id_user INT(3) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    fecha_contrato VARCHAR(255) NOT NULL,
    CONSTRAINT fk_contrato_usuario FOREIGN KEY (id_user) REFERENCES usuario (id_user)
);