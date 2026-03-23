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
}) => {
  return (
    <div className="recipe-card">
      {image && <img src={image} alt={title} className="recipe-card-img" />}
      <div className="recipe-card-body">
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
      </div>
    </div>
  );
};

export default RecipeCard;
