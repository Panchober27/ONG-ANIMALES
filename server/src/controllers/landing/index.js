const landingController = {};

// Seleccionar 3 animales y 3 Usuarios

landingController.getData = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM landing", (err, rows) => {
      if (err) {
        log.error(err);
      } else {
        res.json(rows);
      }
    });
  });
};

module.exports = landingController;
