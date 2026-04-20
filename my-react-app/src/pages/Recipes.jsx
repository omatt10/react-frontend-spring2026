import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import RecipeModal from "../components/RecipeModal.jsx";
import AddRecipe from "../components/AddRecipes.jsx";
import EditRecipe from "../components/EditRecipe.jsx";
import "../css/Recipes.css";

const API_URL = "https://demo-backend-7l6h.onrender.com/api/recipes";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);

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

  const handleRecipeUpdated = (updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r)),
    );
    setEditRecipe(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setRecipes((prev) => prev.filter((r) => r._id !== id));
      } else {
        alert("Failed to delete recipe.");
      }
    } catch (err) {
      alert("Could not connect to server.");
    }
  };

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
                image={`${import.meta.env.BASE_URL}images/${recipe.main_image.replace("images/", "")}`}
                category={recipe.category}
                title={recipe.name}
                description={recipe.description}
                calories={recipe.calories}
                protein={recipe.protein}
                carbs={recipe.carbs}
                fat={recipe.fat}
                time={recipe.prep_time}
                onClick={() => setSelectedRecipe(recipe)}
                onEdit={() => setEditRecipe(recipe)}
                onDelete={() => handleDelete(recipe._id)}
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

      {editRecipe && (
        <EditRecipe
          recipe={editRecipe}
          closeEditDialog={() => setEditRecipe(null)}
          onRecipeUpdated={handleRecipeUpdated}
        />
      )}
    </main>
  );
};

export default Recipes;
