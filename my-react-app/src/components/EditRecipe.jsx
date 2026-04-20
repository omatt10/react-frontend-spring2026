import "../css/EditRecipe.css";
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
  return errors;
};

const EditRecipe = ({ recipe, closeEditDialog, onRecipeUpdated }) => {
  const [form, setForm] = useState({
    name: recipe.name || "",
    category: recipe.category || "",
    calories: recipe.calories || "",
    protein: recipe.protein || "",
    carbs: recipe.carbs || "",
    fat: recipe.fat || "",
    prep_time: recipe.prep_time || "",
    description: recipe.description || "",
    ingredients: recipe.ingredients || "",
    instructions: recipe.instructions || "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerError("");
  };

  const handleSubmit = async (e) => {
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
        `https://demo-backend-7l6h.onrender.com/api/recipes/${recipe._id}`,
        {
          method: "PUT",
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
        if (onRecipeUpdated) onRecipeUpdated(data);
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
    <div id="edit-recipe-dialog" className="er-modal" onClick={closeEditDialog}>
      <div className="er-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="er-container">
          <span className="er-close-btn" onClick={closeEditDialog}>
            &times;
          </span>

          <div id="edit-dialog-content">
            <form onSubmit={handleSubmit} noValidate>
              <h3>Edit Recipe</h3>

              <div className="er-row">
                <div className="er-field">
                  <label>
                    Recipe Name <span className="er-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="er-error">{errors.name}</span>
                  )}
                </div>
                <div className="er-field">
                  <label>
                    Category <span className="er-required">*</span>
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
                    <span className="er-error">{errors.category}</span>
                  )}
                </div>
              </div>

              <div className="er-row er-four">
                <div className="er-field">
                  <label>
                    Calories <span className="er-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="calories"
                    value={form.calories}
                    onChange={handleChange}
                    min="1"
                  />
                  {errors.calories && (
                    <span className="er-error">{errors.calories}</span>
                  )}
                </div>
                <div className="er-field">
                  <label>
                    Protein (g) <span className="er-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="protein"
                    value={form.protein}
                    onChange={handleChange}
                    min="0"
                  />
                  {errors.protein && (
                    <span className="er-error">{errors.protein}</span>
                  )}
                </div>
                <div className="er-field">
                  <label>
                    Carbs (g) <span className="er-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="carbs"
                    value={form.carbs}
                    onChange={handleChange}
                    min="0"
                  />
                  {errors.carbs && (
                    <span className="er-error">{errors.carbs}</span>
                  )}
                </div>
                <div className="er-field">
                  <label>
                    Fat (g) <span className="er-required">*</span>
                  </label>
                  <input
                    type="number"
                    name="fat"
                    value={form.fat}
                    onChange={handleChange}
                    min="0"
                  />
                  {errors.fat && <span className="er-error">{errors.fat}</span>}
                </div>
              </div>

              <div className="er-row">
                <div className="er-field">
                  <label>
                    Prep Time <span className="er-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="prep_time"
                    value={form.prep_time}
                    onChange={handleChange}
                  />
                  {errors.prep_time && (
                    <span className="er-error">{errors.prep_time}</span>
                  )}
                </div>
                <div className="er-field">
                  <label>
                    Description <span className="er-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <span className="er-error">{errors.description}</span>
                  )}
                </div>
              </div>

              <div className="er-field">
                <label>
                  Ingredients <span className="er-required">*</span>
                </label>
                <textarea
                  name="ingredients"
                  rows="3"
                  value={form.ingredients}
                  onChange={handleChange}
                ></textarea>
                {errors.ingredients && (
                  <span className="er-error">{errors.ingredients}</span>
                )}
              </div>

              <div className="er-field">
                <label>
                  Instructions <span className="er-required">*</span>
                </label>
                <textarea
                  name="instructions"
                  rows="3"
                  value={form.instructions}
                  onChange={handleChange}
                ></textarea>
                {errors.instructions && (
                  <span className="er-error">{errors.instructions}</span>
                )}
              </div>

              {serverError && (
                <div className="er-message er-error-box">❌ {serverError}</div>
              )}

              <div className="er-footer">
                <button
                  type="button"
                  className="er-cancel-btn"
                  onClick={closeEditDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="er-submit-btn"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecipe;
