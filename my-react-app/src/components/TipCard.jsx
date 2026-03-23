const TipCard = ({ title, description }) => {
    return (
        <div className="tip-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default TipCard
