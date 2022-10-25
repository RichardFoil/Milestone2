const express = require('express')
const recipes = express.Router()
const recipes = require('../models/recipes.js')
    
    //index routes
recipes.get('/', (req, res) => {

    res.json({message: 'Get all the recipes'})
})

        //show route 
recipes.get('/:id', (req, res) => {

    res.json({message: 'Get One the recipes'})
})
        // post route
recipes.post('/', (req, res) => {
   res.json({message: 'Create route hit!! recipes!!'})
        //delete route
  recipes.delete('/:id', (req, res) => {
    res.json({message: 'Delete this route!! recipes!!'})
      })

      //edit route
      .get('/:id/edit', (req, res) => {
    
      })},)
    
  


module.exports = recipes