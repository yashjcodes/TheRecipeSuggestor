// src/routes/recipes.js
const express = require('express');
const router = express.Router();

const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/RecipeController');

// GET ALL
router.get('/', getAllRecipes);

// GET BY ID
router.get('/:id', getRecipeById);

// CREATE
 router.post('/', createRecipe);


// kaam badme me karna he
// UPDATE
//router.put('/:id', updateRecipe);

// DELETE
//router.delete('/:id', deleteRecipe);

module.exports = router;
