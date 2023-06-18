const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefs = require("./data/chefs/chefs.json");
const recipes = require("./data/recipes/recipes.json");
const answers = require("./data/answers/answers.json");

//middleware
app.use(cors());
app.use(express.json());

//all chefs
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

//single chef data
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  if (id > chefs.length) {
    res.send({ name: "No data found" });
  } else {
    const selectedChef = chefs.find((chef) => chef.id == id);
    res.send(selectedChef);
  }
});

//all recipes data
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/answers", (req, res) => {
  res.send(answers);
});

app.get("/", (req, res) => {
  res.send("The Web is running");
});

app.listen(port, () => {
  console.log(`listening port: 5000`);
});
