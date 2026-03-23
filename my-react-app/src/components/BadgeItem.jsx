const BadgeItem = ({ image, label }) => {
  return (
    <div className="badge">
      <img src={image} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default BadgeItem;
