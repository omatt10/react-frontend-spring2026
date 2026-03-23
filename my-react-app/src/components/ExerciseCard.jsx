import { Link } from "react-router-dom";

const ExerciseCard = ({ image, title, linkTo }) => {
  const card = (
    <div className="exercise-card">
      <img src={image} alt={title} className="exercise-image" />
      <div className="exercise-card-footer">
        <h3>{title}</h3>
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="exercise-card-link">
        {card}
      </Link>
    );
  }

  return card;
};

export default ExerciseCard;
