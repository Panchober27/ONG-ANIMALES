-- En este archivo creare 2 tablas. la tabla landing y la tabla client 
-- la tabla client contiene a las personas que han adoptado animales en
-- la fundación :)

-- donde colocare 3 animales y usuarios (que provienen de la )


CREATE TABLE landing (
    id_lan INT(3) PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(255) NOT NULL,
    animal_name VARCHAR(255) NOT NULL,
    animal_Age INT(3) NOT NULL,
    animal_specie VARCHAR(255) NOT NULL,
    adoption_date DATE NOT NULL,
    client_img VARCHAR(255) NOT NULL
);


-- Insert's a la tabla landing
INSERT INTO `landing` (`id_lan`, `client_name`, `animal_name`, `animal_Age`, `animal_specie`, `adoption_date`, `client_img`)
VALUES (NULL, 'Cliente 1', 'Afrika', '8', 'Gato', '2021-06-16', 'esta sera la url de la img?');