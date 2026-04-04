const RecipeCard = ({
  category,
  title,
  description,
  calories,
  protein,
  carbs,
  fat,
  time,
  onClick,
}) => {
  return (
    <div className="recipe-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="recipe-card-body">
        {category && <span className="recipe-badge">{category}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="recipe-macros">
          {calories && <span><strong>{calories}</strong> kcal</span>}
          {protein && <span><strong>{protein}g</strong> protein</span>}
          {carbs && <span><strong>{carbs}g</strong> carbs</span>}
          {fat && <span><strong>{fat}g</strong> fat</span>}
        </div>
        {time && <p className="recipe-time">⏱ {time}</p>}
        <p className="recipe-click-hint">Click for details →</p>
      </div>
    </div>
  );
};
 
export default RecipeCard;