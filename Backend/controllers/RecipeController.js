// src/controllers/recipeController.js

exports.getAllRecipes = (req, res) => {
  res.json({ message: "Here all recipes will be returned" });
};

exports.getRecipeById = (req, res) => {
  const recipeId = req.params.id;
  res.json({ message: `Recipe with ID: ${recipeId}` });
};

exports.createRecipe = (req, res) => {
  const newRecipe = req.body;
  res.status(201).json({ message: "Recipe created", recipe: newRecipe });
};