// RecipeDetail Component
import { useState } from 'react';
import { X, Sparkles, Lightbulb, Clock, Leaf } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
                               
function RecipeDetail({ recipe, onClose }) {
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSimplify = () => {
    setLoading(true);
    setTimeout(() => {
      setAiResponse(`Here's a simpler version: ${recipe.instructions.split('.')[0]}. The key is to take your time and follow each step carefully!`);
      setLoading(false);
    }, 1500);
  };

  const handleSuggestion = () => {
    setLoading(true);
    setTimeout(() => {
      setAiResponse(`Based on your ingredients (${recipe.ingredients.join(', ')}), you might also enjoy trying Butter Chicken, Dal Makhani, or Palak Paneer!`);
      setLoading(false);
    }, 1500);
  };

const handleAi = async () => {
  setLoading(true);
  try {
    const res = await fetch("http://localhost:5000/api/generate-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipeName: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
      }),
    });

    const data = await res.json();
    setAiResponse(data.text);
  } catch (error) {
    console.error("Error:", error);
  }
  setLoading(false);
};


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onClose}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <X className="w-5 h-5" />
        Back to recipes
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="h-3 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400"></div>
        
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
              {recipe.cuisine}
            </span>
            <span className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 ${
              recipe.isVegetarian 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {recipe.isVegetarian && <Leaf className="w-4 h-4" />}
              {recipe.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {recipe.prepTimeMinutes} minutes
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium capitalize">
              {recipe.difficulty}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="capitalize">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
            <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-500" />
              AI Assistance
            </h2>
            
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleSimplify}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-white border-2 border-purple-300 text-purple-700 rounded-xl hover:bg-purple-50 transition-all font-medium disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Lightbulb className="w-5 h-5" />
                Simplify Recipe
              </button>
              <button
               onClick={handleAi}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-medium disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5"  />
                Get Recipe 
              </button>
            </div>

            {loading && (
              <div className="text-center py-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-500 border-t-transparent"></div>
                <p className="text-purple-600 mt-2">AI is thinking...</p>
              </div>
            )}

            {aiResponse && !loading && (
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">{aiResponse}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {recipe.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecipeDetail;