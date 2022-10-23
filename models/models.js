const mongoose = require('mongoose')
const { Schema } = mongoose

const recipeSchema = new Schema({
    chef: {type: String,},
    dish: {type: String, require: true},
    hasGluten: Boolean, hasPeanuts: Boolean, isVegan: Boolean, isVegitarian: Boolean,
    ingredients: { type: String, require: true},
    instructions: {type: String},
    isBreakfast: Boolean, isDinner: Boolean, isDessert: Boolean,
    image: { type: String, defualt: 'https://place-puppy.com/300x300'},
})

const Recipe = mongoose.model('Favorite recipes', recipeSchema)

module.exports = Recipe