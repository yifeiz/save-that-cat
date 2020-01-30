const express = require("express");

const cors = require("cors");
const Pool = require("pg").Pool;
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(cors({ origin: true, crednetials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.json());

const config = {
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  idleTimeoutMillis: 0
};

const pool = new Pool(config);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is now listening.");
});

app.get("/cats", async (req, res) => {
  const catsQuery = "SELECT * FROM cats";
  await pool.query(catsQuery, (error, results) => {
    if (error) {
      const msg = error.message;
      res.status(400).json({ error, msg });
      return;
    }
    console.log("Get table of cats");
    res.status(200).json(results.rows);
  });
});

app.delete("/cats", async (req, res) => {
  const deleteQuery = "DELETE FROM cats";
  await pool.query(deleteQuery, (error, results) => {
    if (error) {
      const msg = error.message;
      res.status(400).json({ error, msg });
      console.log("nuke failed");
      return;
    }
    res.status(200).send();
    console.log("nuke successful");
  });
});

app.post("/cats", async (req, res) => {
  const columnString = "(name, location, colour, description)";
  const { name, location, colour, description } = req.body;

  const putQuery = `INSERT INTO cats ${columnString} VALUES ('${name}', '${location}', '${colour}', '${description}')`;
  await pool.query(putQuery, (error, results) => {
    if (error) {
      const msg = error.message;
      res.status(400).json({ error, msg });
      console.log(error, "putting to database failed");
      return;
    }
    res.status(200).send();
    console.log("write to database succeeded");
  });
});
