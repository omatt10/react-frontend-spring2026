import "./css/RecipeModal.css";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <span className="modal-badge">{recipe.category}</span>
          <h2>{recipe.name}</h2>
          <p className="modal-desc">{recipe.description}</p>
        </div>

        <div className="modal-macros">
          <div className="macro-item">
            <span className="macro-value">{recipe.calories}</span>
            <span className="macro-label">Calories</span>
          </div>
          <div className="macro-item">
            <span className="macro-value">{recipe.protein}g</span>
            <span className="macro-label">Protein</span>
          </div>
          <div className="macro-item">
            <span className="macro-value">{recipe.carbs}g</span>
            <span className="macro-label">Carbs</span>
          </div>
          <div className="macro-item">
            <span className="macro-value">{recipe.fat}g</span>
            <span className="macro-label">Fat</span>
          </div>
          <div className="macro-item">
            <span className="macro-value">{recipe.prep_time}</span>
            <span className="macro-label">Prep Time</span>
          </div>
        </div>

        {recipe.ingredients && (
          <div className="modal-section">
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
          </div>
        )}

        {recipe.instructions && (
          <div className="modal-section">
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default RecipeModal;