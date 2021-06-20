const usersController = {};

/**
 * Metodo para listar todos los usuarios.
 */
usersController.getAllUsers = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM  usuario", (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        console.log(rows);
        res.json(rows);
      }
    });
  });
};

/**
 * Metodo para obtener un usuario en base a su id.
 */
usersController.getUserById = (req, res) => {
//   const userId = req.params.user.id; // Revisar este valor, puede que genere conflictos.
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuario WHERE id_user = ?", (err, userId) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json(user);
      }
    });
  });
};

module.exports = usersController;
