// src/app.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const RecipeSchema = require('./models/Recipe');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


const recipeRoutes = require('./routes/RecipeRoute');  
app.use('/api/recipes', recipeRoutes);    



app.get('/', (req, res) => {
  res.send({ message: 'API is running...' });
});

app.post('/', async (req, res) => {
  const newRecipe = req.body;
  const recipe = await new RecipeSchema(newRecipe);
  await recipe.save();
  res.send({ message: 'POST request received!' });
});


// Route to connect with Google Generative AI through backend
app.post("/api/generate-recipe", async (req, res) => {
  const { recipeName, ingredients, instructions } = req.body;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
 console.log(req.body);
  const prompt = `create a detailed recipe based on the following information:\n
  Recipe Name: ${recipeName}\n
  Ingredients: ${ingredients.join(", ")}\n
  Instructions: ${instructions}\n;`;

  const result = await model.generateContent(prompt);
  res.json({ text: result.response.text() });
});



module.exports = app;
