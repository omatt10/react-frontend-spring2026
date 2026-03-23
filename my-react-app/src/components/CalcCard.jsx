const CalcCard = ({ image, title, description }) => {
  return (
    <div className="calc-card">
      <img src={image} alt={title} className="calc-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="calc-btn">Click here to calculate →</button>
    </div>
  );
};

export default CalcCard;
