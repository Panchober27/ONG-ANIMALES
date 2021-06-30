import React, { useState, useEffect } from "react";

const Animal = (props) => {
  // const [animal, setAnimal] = useState({});
  const animal = props.animal;

  // useEffect(() => {
  //   getAnimal();
  // }, []);

  // useEffect(() => {
  //   document.title = animal.name;
  // }, [animal]);

  // const getAnimal = async () => {
  //   const data = await fetch("http://localhost:3300/demoanimal");
  //   const Animal = await data.json();
  //   setAnimal(Animal);
  // };

  console.log(animal);
  return (
    <div className="row">
      <h3>Single Animal</h3>
      <h5>ID: {animal.id_animal}</h5>
      <p>Nombre: {animal.nombre_animal}</p>
      <p>Edad: {animal.edad}</p>
    </div>
  );
};

export default Animal;
