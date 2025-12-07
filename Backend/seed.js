// seed.js

import SampleRecipes from "../Frontend/Components/sampleRecipes.js";
import mongoose from "mongoose";
import Recipe from "./models/Recipe.js"; // correct path to Recipe model
import dotenv from "dotenv";
dotenv.config();

// ---- 1. Connect to MongoDB ----
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// ---- 2. Sample data you want to insert ----
// const sampleRecipes = [
//   {
//     id: "rec_101",
//     name: "Paneer Butter Masala",
//     cuisine: "Indian",
//     isVegetarian: true,
//     prepTimeMinutes: 40,
//     ingredients: ["paneer", "tomato", "cream"],
//     instructions: "Cook paneer with creamy tomato gravy.",
//   },
//   {
//     id: "rec_102",
//     name: "Pasta Alfredo",
//     cuisine: "Italian",
//     isVegetarian: true,
//     prepTimeMinutes: 25,
//     ingredients: ["pasta", "cream", "cheese"],
//     instructions: "Cook pasta, mix with alfredo sauce.",
//   }
// ];

// ---- 3. Insert data ----
async function seedDB() {
  await Recipe.deleteMany();      // clears old data
  await Recipe.insertMany(SampleRecipes);  // adds new data
  console.log("Database Seeded!");
  mongoose.connection.close();
}

seedDB();
