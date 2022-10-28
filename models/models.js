const mongoose = require('mongoose')
const { Schema } = mongoose

const recipeSchema = new Schema({
    chef: {type: String,},
    dish: {type: String, require: true},
    hasGluten: Boolean, hasPeanuts: Boolean, isVegan: Boolean, isVegitarian: Boolean,
    ingredients: { type: String, require: true},
    instructions: {type: String},
    isBreakfast: Boolean, isDinner: Boolean, isDessert: Boolean,
    
})

const Recipes = mongoose.model('recipes', recipeSchema)

module.exports = Recipes;