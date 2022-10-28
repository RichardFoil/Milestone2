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
 // res.json({ answer: 42 });
  // res.send("okay");
  const foundRecipes = await Recipes.create(req.body);
  console.log(req.body)
  res.json(foundRecipes);
  
  // FOR TESTING PURPOSES ,using RES OBJECT send data back to the browser
  // 1.connect to the database
  // 2.get the data sent from the browser using request object (res) variable)
  // 3.insert data into the database using the data from step 2 
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
  console.log('WE HIT THE EDIT!!!')
  const foundRecipes = await Recipes.findByIdAndUpdate(req.params.id, { dish: req.body })
  res.json(foundRecipes);
});



module.exports = recipes;
