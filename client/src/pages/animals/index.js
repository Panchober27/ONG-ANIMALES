import React, { Fragment, useState, useEffect } from "react";
import SingleAnimal from "./SingleAnimal";
// import Table from "./Table";

const Animals = () => {
  /**
   * Realizar logica para:
   * 1- Si se oprimio un animal de la lista mostrar componente SingleAnimal.
   */

  // Mostrando listado de prueba.
  const [animals, setAnimals] = useState([]);

  const getAnimals = async () => {
    const data = await fetch("http://localhost:3300/adoptionlistR");
    const animalList = await data.json();
    setAnimals(animalList);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  // Revision de animals!
  const animal = animals.length ? animals[0] : {};

  let x = "xxx";

  return (
    <Fragment>
      <h1>Animales</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          {/* <Table /> */}
          <SingleAnimal animal={animal} />
        </div>
        <div className="col-12 col-md-6">
          <h4>Listado Animales Para Adopción</h4>
          <ul>
            {animals.map((item) => (
              <li key={item.id_animal}>
                {" "}
                Nombre: {item.nombre_animal} - Edad: {item.edad} - Especie:{" "}
                {item.especie_animal}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Animals;
