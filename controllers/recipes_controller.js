const express = require('express')
const recipes = express.Router()
//const recipes = require('../models/recipes.js')
    
    //index routes
recipes.get('/',async (req, res) => {
    const foundRecipes = await Recipes.find()
    res.json(foundRecipes)
    })

        //show route 
recipes.get('/:id',async (req, res) => {
    const foundRecipes = await Recipes.findById(req.params.id)
    res.json(foundRecipes)
    })
        // post route
recipes.post('/',async (req, res) => {
    const foundRecipes = await Recipes.findById(req.params.id)
   res.json(foundRecipes)
    })

        //delete route
  recipes.delete('/:id',async (req, res) => {
    const foundRecipes = await Recipes.findById(req.params.id)
    res.json(foundRecipes)
    })

      //edit route
      breads.get('/:id/edit',async (req, res) => {
        const foundRecipes = await Recipes.findById(req.params.id)
        res.json(foundRecipes)
     })
      
  


module.exports = recipes