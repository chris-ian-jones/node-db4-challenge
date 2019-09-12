const express = require('express')

const db = require('./data/db-config.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => res.json('API Working'))

server.get('/api/recipes', (req, res) => {
  // get all recipes from the database
  db('recipes')
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

module.exports = server