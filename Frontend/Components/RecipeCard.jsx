// RecipeCard Component
import React from 'react';
import { Clock, Leaf } from 'lucide-react';

function RecipeCard({ recipe, onClick }) {
 // const { Clock, Leaf } = require('lucide-react');
  
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1"
    >
      <div className="h-2 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{recipe.name}</h3>
        
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
            {recipe.cuisine}
          </span>
          <span className={`px-3 py-1 rounded-full font-medium ${
            recipe.isVegetarian 
              ? 'bg-green-100 text-green-700 flex items-center gap-1' 
              : 'bg-red-100 text-red-700'
          }`}>
            {recipe.isVegetarian && <Leaf className="w-3 h-3" />}
            {recipe.isVegetarian ? 'Veg' : 'Non-Veg'}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTimeMinutes} min</span>
          </div>
          <span className="px-3 py-1 bg-gray-100 rounded-full capitalize">
            {recipe.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {recipe.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;