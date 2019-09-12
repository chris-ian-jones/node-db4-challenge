const express = require('express')

const RecipeRputer = require('./recipes/recipe-router.js')

const server = express()

server.use(express.json())

server.use('/api/recipes', RecipeRputer)

module.exports = server