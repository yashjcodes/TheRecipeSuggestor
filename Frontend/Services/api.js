// services/api.js
const API_BASE_URL = 'http://localhost:5000';

export const getAllRecipes = async () => {
  const response = await fetch(`${API_BASE_URL}/recipes`);
  if (!response.ok) throw new Error('Failed to fetch recipes');
  return response.json();
};

export const searchRecipes = async (filters) => {
  const queryParams = new URLSearchParams();
  
  if (filters.searchQuery) queryParams.append('search', filters.searchQuery);
  if (filters.cuisine) queryParams.append('cuisine', filters.cuisine);
  if (filters.isVegetarian) queryParams.append('isVegetarian', filters.isVegetarian);
  if (filters.maxPrepTime) queryParams.append('maxPrepTime', filters.maxPrepTime);

  const response = await fetch(`${API_BASE_URL}/recipes/search?${queryParams}`);
  if (!response.ok) throw new Error('Failed to search recipes');
  return response.json();
};

export const simplifyRecipe = async (instructions) => {
  const response = await fetch(`${API_BASE_URL}/ai/simplify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ instructions })
  });
  if (!response.ok) throw new Error('Failed to simplify recipe');
  return response.json();
};

export const getAISuggestion = async (ingredients) => {
  const response = await fetch(`${API_BASE_URL}/ai/suggest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients })
  });
  if (!response.ok) throw new Error('Failed to get suggestions');
  return response.json();
};