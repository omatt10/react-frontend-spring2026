import MetricCard from "../components/MetricCard.jsx";
import "../css/Home.css";

const metrics = [
  {
    title: "BMI",
    value: "23.5",
    label: "Based on weight and height",
    image: "./images/bodyMassIndex.webp",
  },
  {
    title: "Body Fat %",
    value: "18.7%",
    label: "Based on weight and height",
    image: "./images/body-fat-percentage.jpg",
  },
  {
    title: "BMR",
    value: "1,758",
    subText: "kcal/day",
    label: "Basal Metabolic Rate",
    image: "./images/BMR.webp",
  },
];

const Home = () => {
  return (
    <main id="home">
      {/* Hero */}
      <section className="hero">
        <img src="./images/hero.png" alt="Hero" className="hero-bg" />
        <div className="hero-overlay">
          <h1>Track Progress, See Change</h1>
          <p>Enter your BMI to calculate to help you for the BMR calculator</p>
          <button className="hero-btn">Calculate Core Metrics</button>
        </div>
      </section>

      {/* Input Area */}
      <div className="content-wrapper">
        <aside className="sidebar">
          <h3>Enter Your Info:</h3>
          <p>
            Fill in the form below to calculate your BMI, body fat %, and BMR
          </p>
          <div className="gender-toggle">
            <button className="toggle-btn active">Female</button>
            <button className="toggle-btn">Male</button>
          </div>
          <button className="calculate-btn">Calculate</button>
        </aside>

        <div className="form-area">
          <div className="form-row">
            <div className="form-group">
              <label>Age</label>
              <input type="number" placeholder="Enter age" />
            </div>
            <div className="form-group">
              <label>Height (in)</label>
              <input type="number" placeholder="Enter height" />
            </div>
            <div className="form-group">
              <label>Weight (lbs)</label>
              <input type="number" placeholder="Enter weight" />
            </div>
            <div className="form-group">
              <label>Activity Level</label>
              <select>
                <option>Sedentary</option>
                <option>Low Moderate</option>
                <option>Very Active</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <section className="metrics">
        {metrics.map((m) => (
          <MetricCard
            key={m.title}
            title={m.title}
            value={m.value}
            subText={m.subText}
            label={m.label}
            image={m.image}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
