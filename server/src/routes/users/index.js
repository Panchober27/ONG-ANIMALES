const express = require("express");
const router = express.Router();
// Controlador de usuarios.
const usersController = require("../../controllers/users");

// Metodo para listar todos los usuarios en la base de datos.
router.get("/list-users", usersController.getAllUsers);

// Metodo para obtener un usuario en base a su id.
router.get("/user!", usersController.getUserById);

module.exports = router;
