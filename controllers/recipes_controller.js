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

//show route
recipes.get("/:id", async (req, res) => {
  const foundRecipes = await Recipes.findById(req.params.id);
  res.json(foundRecipes);
});
// post route
recipes.post("/", async (req, res) => {
  const foundRecipes = await Recipes.create(req.body);
  res.json(foundRecipes);
});

//delete route
recipes.delete("/:id", async (req, res) => {
  const foundRecipes = await Recipes.delete(req.params.id);
  res.json(foundRecipes);
});

//edit route
recipes.get("/:id/edit", async (req, res) => {
  const foundRecipes = await Recipes.findById(req.params.id);
  res.json(foundRecipes);
});

//gallery/Homepage route 
recipes.get("/", async (req, res) => {
    const foundRecipes = await Recipes.find();
    res.json(foundRecipes);
  });

module.exports = recipes;
