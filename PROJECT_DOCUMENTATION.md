# TheRecipeSuggestor Project Documentation

## Overview
TheRecipeSuggestor is a full-stack web application designed to help users discover, filter, and get AI-powered suggestions for recipes. It consists of a Node.js/Express backend and a React/Vite frontend, with MongoDB as the database.

---

## Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **dotenv** (environment variables)
- **cors** (Cross-Origin Resource Sharing)
- **nodemon** (development server)

### Frontend
- **React**
- **Vite** (build tool)
- **Tailwind CSS** (utility-first CSS framework)
- **@google/generative-ai** (AI features)
- **Lucide-react** (icons)
- **ESLint** (linting)

---

## File Structure

```
TheRecipeSuggestor/
├── Backend/
│   ├── app.js
│   ├── index.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── RecipeController.js
│   ├── middleware/
│   ├── models/
│   │   └── Recipe.js
│   ├── routes/
│   │   └── RecipeRoute.js
│   ├── utils/
|   |__seed.js
│   └── ...
├── Frontend/
│   ├── Components/
│   │   ├── FilterPanel.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── RecipeList.jsx
│   │   ├── SampleRecipes.js
│   │   └── SearchBar.jsx
│   ├── Services/
│   │   └── api.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── assets/
│   │       └── react.svg
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── README.md
└── ...
```

---

## Backend Details

### Main Files
- **app.js**: Sets up Express app, middleware, and routes.
- **index.js**: Loads environment variables, connects to MongoDB, and starts the server.
- **models/Recipe.js**: Mongoose schema for recipes.
- **routes/RecipeRoute.js**: Express router for recipe endpoints (GET, POST, etc.).
- **controllers/RecipeController.js**: Controller functions for recipe operations.

### Example: Recipe Schema
```js
const RecipeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  cuisine: String,
  isVegetarian: Boolean,
  prepTimeMinutes: Number,
  ingredients: [String],
  difficulty: { type: String, enum: ['easy','medium','hard'] },
  instructions: String,
  tags: [String],
}, { timestamps: true });
```

### Example: API Endpoints
- `GET /api/recipes/` - Get all recipes
- `GET /api/recipes/:id` - Get recipe by ID
- `POST /api/recipes/` - Create a new recipe

---

## Frontend Details

### Main Files
- **src/App.jsx**: Main React component, manages state, search, and filters.
- **Components/**: UI components for recipe cards, details, search bar, filter panel, etc.
- **Services/api.js**: Functions to interact with backend API (fetch recipes, search, AI features).
- **Tailwind CSS**: Used for styling components.

### Example: RecipeCard Component
```jsx
function RecipeCard({ recipe, onClick }) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl shadow-md ...">
      <h3>{recipe.name}</h3>
      <span>{recipe.cuisine}</span>
      <span>{recipe.isVegetarian ? 'Veg' : 'Non-Veg'}</span>
      <span>{recipe.prepTimeMinutes} min</span>
      <span>{recipe.difficulty}</span>
      {/* Tags */}
      {recipe.tags.slice(0, 3).map(tag => <span key={tag}>#{tag}</span>)}
    </div>
  );
}
```

### Example: API Service
```js
export const getAllRecipes = async () => {
  const response = await fetch(`${API_BASE_URL}/recipes`);
  if (!response.ok) throw new Error('Failed to fetch recipes');
  return response.json();
};
```

---

## Features
- **Recipe Listing**: Browse all recipes.
- **Search & Filter**: Search by name, ingredient, cuisine, vegetarian, prep time, difficulty, tags.
- **Recipe Details**: View detailed info for each recipe.
- **AI Suggestions**: Get recipe ideas and simplified instructions using AI.
- **Responsive UI**: Modern, mobile-friendly design with Tailwind CSS.

---

## How to Run

### Backend
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start server:
   ```sh
   npm run dev
   ```

### Frontend
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start development server:
   ```sh
   npm run dev
   ```

---

## Environment Variables
- **PORT**: Backend server port (default: 5000)
- **MONGO_URI**: MongoDB connection string

---

## Additional Notes
- **AI Features**: Uses Google Generative AI for recipe suggestions and simplification.
- **Icons**: Lucide-react for UI icons.
- **Linting**: ESLint for code quality.
- **Build Tool**: Vite for fast frontend builds.

---

## Authors
- Yash Joshi

---

## License
ISC
