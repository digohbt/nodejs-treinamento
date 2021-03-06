
const consign = require('consign');

const express = require("express")
const app = express()

app.use(express.json()) 
app.use(express.urlencoded ( { extended: true}) )

consign().include('models').then('controllers').then('routes').into(app)


app.listen(3000, () => console.log("servidor porta 3000"))


