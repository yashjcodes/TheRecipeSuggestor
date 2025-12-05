// backend/src/models/Recipe.js
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
    {
  id: {
     type: String,
      required: true,
       unique: true 
    }, // e.g. rec_101
  name: { 
    type: String,
     required: true
     },
  cuisine: String,
  isVegetarian: Boolean,
  prepTimeMinutes: Number,
  ingredients: [String],
  difficulty: { 
    type: String,
     enum: ['easy','medium','hard'] 
    },
  instructions: String,
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
