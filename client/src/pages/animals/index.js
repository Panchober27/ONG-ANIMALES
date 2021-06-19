import React, { Fragment, useState, useEffect } from "react";
import SingleAnimal from "./SingleAnimal";

const Animals = () => {
  /**
   * Realizar logica para:
   * 1- Si se oprimio un animal de la lista mostrar componente SingleAnimal.
   */

  // Mostrando listado de prueba.
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    const data = await fetch("http://localhost:3300/adoptionlist");
    const animalList = await data.json();
    setAnimals(animalList);
  };

  return (
    <Fragment>
      <h1>Animales</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <SingleAnimal />
        </div>
        <div className="col-12 col-md-6">
          <h4>Listado Animales Para Adopción</h4>
          <ul>
            {animals.map((item) => (
              <li key={item.id}>
                {" "}
                {item.name} - {item.age} - {item.specie}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Animals;
