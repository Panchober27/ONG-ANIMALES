import React, { useState, useEffect } from "react";

const Animal = () => {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
      getAnimal();
  },[]);


  const getAnimal = async () => {
      const data = await fetch('http://localhost:3300/demoanimal');
      const Animal = await data.json();
      setAnimal(Animal);
  }

  return (
    <div className="row">
      <h3>Single Animal</h3>
      <h5>ID: {animal.id}</h5>
      <p>Nombre: {animal.name}</p>
      <p>Edad: {animal.age}</p>
      <p>Especie: {animal.specie}</p>
    </div>
  );
};

export default Animal;
