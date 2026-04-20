const RecipeCard = ({
  image,
  category,
  title,
  description,
  calories,
  protein,
  carbs,
  fat,
  time,
  onClick,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="recipe-card">
      {image && <img src={image} alt={title} className="recipe-card-img" />}
      <div
        className="recipe-card-body"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        {category && <span className="recipe-badge">{category}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="recipe-macros">
          {calories && (
            <span>
              <strong>{calories}</strong> kcal
            </span>
          )}
          {protein && (
            <span>
              <strong>{protein}g</strong> protein
            </span>
          )}
          {carbs && (
            <span>
              <strong>{carbs}g</strong> carbs
            </span>
          )}
          {fat && (
            <span>
              <strong>{fat}g</strong> fat
            </span>
          )}
        </div>
        {time && <p className="recipe-time">⏱ {time}</p>}
        <p className="recipe-click-hint">Click for details →</p>
      </div>
      <div className="recipe-card-actions">
        <button
          className="recipe-edit-btn"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          Edit
        </button>
        <button
          className="recipe-delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
