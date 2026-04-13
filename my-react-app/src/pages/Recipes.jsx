import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import RecipeModal from "../components/RecipeModal.jsx";
import AddRecipe from "../components/AddRecipe.jsx";
import "../css/Recipes.css";

const API_URL = "https://demo-backend-7l6h.onrender.com/api/recipes";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  // Auto-updates the list when a new recipe is added
  const handleRecipeAdded = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
    setShowAddDialog(false);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <main id="recipes">
      <section className="page-header">
        <h1>Healthy Recipes</h1>
        <p>Simple and nutritious meals to fuel your goals</p>
        <button className="btn-add-recipe" onClick={openAddDialog}>
          + Add Recipe
        </button>
      </section>

      <section className="recipes-grid-section">
        {loading && <p className="recipes-status">Loading recipes...</p>}
        {error && (
          <p className="recipes-status recipes-error">
            ⚠️ Could not load recipes. Make sure your Render server is live.
          </p>
        )}
        {!loading && !error && (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe._id}
                category={recipe.category}
                title={recipe.name}
                description={recipe.description}
                calories={recipe.calories}
                protein={recipe.protein}
                carbs={recipe.carbs}
                fat={recipe.fat}
                time={recipe.prep_time}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>
        )}
      </section>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {showAddDialog && (
        <AddRecipe
          closeAddDialog={closeAddDialog}
          onRecipeAdded={handleRecipeAdded}
        />
      )}
    </main>
  );
};

export default Recipes;
