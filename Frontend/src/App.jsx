
// Main App Component

import { useState } from 'react';
import { ChefHat } from 'lucide-react';
import RecipeList from '../Components/RecipeList';
import RecipeDetail from '../Components/RecipeDetail';
import SearchBar from '../Components/SearchBar';
import SampleRecipes from '../Components/SampleRecipes';
import FilterPanel from '../Components/FilterPanel';
function App() {
  const [recipes, setRecipes] = useState(SampleRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: '',
    isVegetarian: '',
    maxPrepTime: ''
  });

  const handleSearch = () => {
    let filtered = SampleRecipes;

    if (searchQuery) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (filters.cuisine) {
      filtered = filtered.filter(r => r.cuisine === filters.cuisine);
    }

    if (filters.isVegetarian !== '') {
      filtered = filtered.filter(r => r.isVegetarian === (filters.isVegetarian === 'true'));
    }

    if (filters.maxPrepTime) {
      filtered = filtered.filter(r => r.prepTimeMinutes <= parseInt(filters.maxPrepTime));
    }

    setRecipes(filtered);
  };

  const resetFilters = () => {
    setFilters({ cuisine: '', isVegetarian: '', maxPrepTime: '' });
    setSearchQuery('');
    setRecipes(SampleRecipes);
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="w-10 h-10 text-orange-500" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Smart Recipe Explorer
                </h1>
                <p className="text-sm text-gray-500">Discover delicious recipes with AI assistance</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {!selectedRecipe ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearch={handleSearch}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />
            
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              onReset={resetFilters}
              show={showFilters}
            />
          </div>

          <RecipeList
            recipes={recipes}
            onRecipeClick={setSelectedRecipe}
          />
        </main>
      ) : (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;