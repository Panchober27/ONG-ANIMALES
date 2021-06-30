const promesa = new Promise((res, rej) => {
  req.getConnection((err, conn) => {
    if (err) rej(err);
    else
      conn.query("SELECT ....", (err, rows) => {
        if (err) rej(err);
        else res(rows);
      });
  });
});

promesa.then((user) => console.log(user)).catch((err) => console.log(err));

// -----------------------------------------------------------

// await escucha al res de una promise!

function asyncPromise() {
  promesa.then((user) => {
    console.log(user);
  });
  console.log("consiguinedo user");
}
