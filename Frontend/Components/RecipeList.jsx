// RecipeList Component
import RecipeCard from './RecipeCard';
function RecipeList({ recipes, onRecipeClick }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No recipes found. Try different filters!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </div>
  );
}

export default RecipeList;