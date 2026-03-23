import { Link } from "react-router-dom";

const NutritionCard = ({ image, title, description, linkTo }) => {
  const card = (
    <div className="nutrition-card">
      <img src={image} alt={title} className="nutrition-card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="nutrition-link">Click to see more →</span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="nutrition-card-link">
        {card}
      </Link>
    );
  }

  return <div className="nutrition-card-link">{card}</div>;
};

export default NutritionCard;
