const express = require("express");
const recipes = express.Router();
const Recipes = require("../models/models.js");

//index routes
recipes.get("/", async (req, res) => {
  console.log("WE SMACKED THE /recipes route!!");
  const foundRecipes = await Recipes.find();
  console.log("datataaa from db", foundRecipes);
  res.json(foundRecipes);
});
 
// addRecipe route 
recipes.post("/add", async (req, res) => {
  console.log("Were adding new recipes !")
  const foundRecipes = await Recipes.create(req.body);
  console.log(req.body)
  res.json(foundRecipes);
  

});

//show route
recipes.get("/:id", async (req, res) => {
  console.log('We sacked the grab single recipe route!', req.params.id)
  const foundRecipes = await Recipes.findById(req.params.id);
  res.json(foundRecipes);
});
// post route
recipes.post("/", async (req, res) => {
    console.log(req.body)
  const foundRecipes = await Recipes.create(req.body);
  res.json(foundRecipes);
});

//delete route
recipes.delete("/:id", async (req, res) => {
  const foundRecipes = await Recipes.findByIdAndDelete(req.params.id);
  res.json(foundRecipes);
});

//edit route
recipes.get("/:id/update", (req, res) => {});

module.exports = recipes;
