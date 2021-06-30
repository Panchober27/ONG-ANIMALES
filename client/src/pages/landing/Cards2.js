import React, { useState, useEffect } from "react";
import Img from "../../assets/img/landing-no-edit.png";

const Cards2 = () => {
  const [animals, setAnimals] = useState();

  const getData = async () => {
    const data = await fetch("http://localhost:3300/adoptionlistR");
    const Animals = await data.json();
    setAnimals(Animals);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="row pt-10">
      {animals.map((item) => (
        //   <li key={item.id_animal}>
        //     {" "}
        //     Nombre: {item.nombre_animal} - Edad: {item.edad} - Especie:{" "}
        //     {item.especie_animal}{" "}
        //   </li>
        <div className="card" key={item.id_animal}>
          <div className="card-body">
            <h4 className="card-title">{item.nombre_animal}</h4>
            <p className="card-text">
              Edad: {item.edad}
              Especie: {item.especie_animal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards2;
