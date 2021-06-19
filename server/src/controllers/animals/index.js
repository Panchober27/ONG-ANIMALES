const animalsController = {};

// Metodo para listar animales desde la base de datos.
animalsController.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM animal", (err, rows) => {
      if (err) {
        console.log(err);
        res.send("error, redirigir a error especifico!");
      } else {
        res.json(rows);
      }
    });
  });
};

module.exports = animalsController;
