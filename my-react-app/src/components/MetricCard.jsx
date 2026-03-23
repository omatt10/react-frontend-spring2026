const MetricCard = ({ image, title, value, subText, label }) => {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <div className="metric-card-content">
        <div className="metric-info">
          <p className="big-number">{value}</p>
          {subText && <p className="sub-text">{subText}</p>}
          <p className="small-text">{label}</p>
        </div>
        <img src={image} alt={title} className="metric-icon" />
      </div>
    </div>
  );
};

export default MetricCard;
