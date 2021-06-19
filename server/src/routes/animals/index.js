const express = require("express");
const router = express.Router();


// Utilizar controlador para consulta SQL.
router.get("/adoptionlist", (req, res) => {
  const animalsForAdoption = [
    { id: 1, name: "Sofia", age: 3, specie: "Gato" },
    { id: 2, name: "Pancho", age: 5, specie: "Gato" },
    { id: 3, name: "Nico", age: 4, specie: "Perro" },
    { id: 4, name: "Mario", age: 5, specie: "Perro" },
    { id: 5, name: "Nadia", age: 1, specie: "Gato" },
    { id: 6, name: "Bryan", age: 11, specie: "Tortuga" },
  ];
  res.json(animalsForAdoption);
});


router.get('/')

module.exports = router;
