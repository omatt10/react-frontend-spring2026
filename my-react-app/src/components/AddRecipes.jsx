import "../css/AddRecipes.css";
import { useState } from "react";

const categories = [
  "High Protein",
  "Low Carb",
  "Breakfast",
  "Lunch",
  "Snack",
  "Plant-Based",
  "Omega-3 Rich",
  "Post-Workout",
  "Vegan",
];

const validate = (form) => {
  const errors = {};
  if (!form.name || form.name.length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!form.category) errors.category = "Please select a category.";
  if (!form.calories || form.calories < 1)
    errors.calories = "Calories must be at least 1.";
  if (form.protein === "" || form.protein < 0)
    errors.protein = "Protein must be 0 or more.";
  if (form.carbs === "" || form.carbs < 0)
    errors.carbs = "Carbs must be 0 or more.";
  if (form.fat === "" || form.fat < 0) errors.fat = "Fat must be 0 or more.";
  if (!form.prep_time) errors.prep_time = "Prep time is required.";
  if (!form.description || form.description.length < 5)
    errors.description = "Description must be at least 5 characters.";
  if (!form.ingredients || form.ingredients.length < 5)
    errors.ingredients = "Ingredients must be at least 5 characters.";
  if (!form.instructions || form.instructions.length < 5)
    errors.instructions = "Instructions must be at least 5 characters.";
  if (!form.image || form.image.length < 1)
    errors.image = "Image filename is required.";
  return errors;
};

const empty = {
  name: "",
  category: "",
  calories: "",
  protein: "",
  carbs: "",
  fat: "",
  prep_time: "",
  description: "",
  ingredients: "",
  instructions: "",
  image: "",
};

const AddRecipe = ({ closeAddDialog, onRecipeAdded }) => {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerError("");
  };

  const addRecipe = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://demo-backend-7l6h.onrender.com/api/recipes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            calories: parseInt(form.calories),
            protein: parseFloat(form.protein),
            carbs: parseFloat(form.carbs),
            fat: parseFloat(form.fat),
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        if (onRecipeAdded) onRecipeAdded(data);
      } else {
        setServerError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setServerError("Could not connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="add-recipe-dialog" className="ar-modal">
      <div className="ar-modal-content">
        <div className="ar-container">
          <span
            id="dialog-close"
            className="ar-close-btn"
            onClick={closeAddDialog}
          >
            &times;
          </span>

          <div id="recipe-dialog-content">
            <form onSubmit={addRecipe} noValidate>
              <h3>Create New Recipe</h3>

              <div className="ar-row">
                <div className="ar-field">
                  <label>
                    Recipe Name <span className="ar-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Grilled Salmon Bowl"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="ar-error">{errors.name}</span>
                  )}
                </div>
                <div className="ar-field">
                  <label>
                    Category <span className="ar-required">*</span>
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <span className="ar-error">{errors.category}</span>
                  )}
                </div>
              </div>

              <div className="ar-row ar-four">
                <div className="ar-field">
                  <label>
                    Calories <span className="ar-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="calories"
                    placeholder="450"
                    value={form.calories}
                    onChange={handleChange}
                    min="1"
                  />
                  {errors.calories && (
                    <span className="ar-error">{errors.calories}</span>
                  )}
                </div>
                <div className="ar-field">
                  <label>
                    Protein (g) <span className="ar-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="protein"
                    placeholder="35"
                    value={form.protein}
                    onChange={handleChange}
                    min="0"
                  />
                  {errors.protein && (
                    <span className="ar-error">{errors.protein}</span>
                  )}
                </div>
                <div className="ar-field">
                  <label>
                    Carbs (g) <span className="ar-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="carbs"
                    placeholder="40"
                    value={form.carbs}
                    onChange={handleChange}
                    min="0"
                  />
                  {errors.carbs && (
                    <span className="ar-error">{errors.carbs}</span>
                  )}
                </div>
                <div className="ar-field">
                  <label>
                    Fat (g) <span className="ar-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="fat"
                    placeholder="12"
                    value={form.fat}
                    onChange={handleChange}
                    min="0"
                  />
                  {errors.fat && <span className="ar-error">{errors.fat}</span>}
                </div>
              </div>

              <div className="ar-row">
                <div className="ar-field">
                  <label>
                    Prep Time <span className="ar-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="prep_time"
                    placeholder="e.g. 25 min"
                    value={form.prep_time}
                    onChange={handleChange}
                  />
                  {errors.prep_time && (
                    <span className="ar-error">{errors.prep_time}</span>
                  )}
                </div>
                <div className="ar-field">
                  <label>
                    Description <span className="ar-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Brief description"
                    value={form.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <span className="ar-error">{errors.description}</span>
                  )}
                </div>
              </div>

              <div className="ar-field">
                <label>
                  Ingredients <span className="ar-required">*</span>
                </label>
                <textarea
                  name="ingredients"
                  rows="3"
                  placeholder="List your ingredients..."
                  value={form.ingredients}
                  onChange={handleChange}
                ></textarea>
                {errors.ingredients && (
                  <span className="ar-error">{errors.ingredients}</span>
                )}
              </div>

              <div className="ar-field">
                <label>
                  Instructions <span className="ar-required">*</span>
                </label>
                <textarea
                  name="instructions"
                  rows="3"
                  placeholder="Step by step instructions..."
                  value={form.instructions}
                  onChange={handleChange}
                ></textarea>
                {errors.instructions && (
                  <span className="ar-error">{errors.instructions}</span>
                )}
              </div>

              {serverError && (
                <div className="ar-message ar-error-box">❌ {serverError}</div>
              )}

              <div className="ar-footer">
                <button
                  type="button"
                  className="ar-cancel-btn"
                  onClick={closeAddDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ar-submit-btn"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Recipe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
