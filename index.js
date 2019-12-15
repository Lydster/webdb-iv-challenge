const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig");
const {
  getDishes,
  getDish,
  addDish,
  getRecipes
} = require("./cookbook/cookbook-helper");

const server = express();

server.use(helmet());
server.use(express.json());

//get all dishes

server.get("/api/dishes", (req, res) => {
  getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not get dishes" });
    });
});

//get one dish

server.get("/api/dishes/:id", (req, res) => {
  const { id } = req.params;
  getDish(id)
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not get dish!" });
    });
});

//add a dish

server.post("/api/dishes", (req, res) => {
  const { dish_name } = req.body;
  addDish({ dish_name })
    .then(dish_name => {
      res.status(200).json(dish_name);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not add dish!" });
    });
});

server.get("/api/dishes/:id/recipes", (req, res) => {
  const { id } = req.params;
  getDish(id).then(dish => {
    res.status(200).json(dish);
  });
  getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ error: "recipes can not be fetched." });
    });
});

const port = 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
