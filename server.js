require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const recipesController = require("./controllers/recipes_controller");

app.use("/recipes",recipesController)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
