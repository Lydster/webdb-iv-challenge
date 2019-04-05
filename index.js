const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig.js");

const server = express();

server.use(helmet());
server.use(express.json());

//get all dishes

server.get("/api/dishes", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not get dishes" });
    });
});

//get one dish

server.get("/api/dishes/:id", (req, res) => {
  db.getDish(req.params.id)
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not get dish!" });
    });
});

const port = 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
