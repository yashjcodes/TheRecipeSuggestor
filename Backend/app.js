// src/app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const RecipeSchema = require('./models/Recipe');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


const recipeRoutes = require('./routes/RecipeRoute');  // 👈 import routes

// Use routes
app.use('/api/recipes', recipeRoutes);    // 👈 connect routes here



// Test route
app.get('/', (req, res) => {
  res.send({ message: 'API is running...' });
});

app.post('/', async (req, res) => {
  const newRecipe = req.body;
  const recipe = await new RecipeSchema(newRecipe);
  await recipe.save();
  res.send({ message: 'POST request received!' });
});


module.exports = app;
