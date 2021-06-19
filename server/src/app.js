const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3300;

app.set("port", port);
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes"));
app.use(require("./routes/animals"));

app.listen(port, () => {
  console.log(`Animal ONG Server started on port ${port}`);
});
