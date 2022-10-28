const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const recipesController = require("./controllers/recipes_controller");
const path = require('path')

require('dotenv').config()

// so i can see req.body in post routes
app.use(express.json())


// Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use("/recipes",recipesController)

//app.use(express.static(path.join(__dirname, 'favorite-recipes', 'build')))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


// LISTEN
app.listen(PORT, () => {
  
  console.log('listening on port', PORT);
  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
})
