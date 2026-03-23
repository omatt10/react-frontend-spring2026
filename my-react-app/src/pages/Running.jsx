import { useState } from "react";
import TipCard from "../components/TipCard.jsx";
import "../css/Running.css";

const tips = [
  {
    title: "Warm Up First",
    description:
      "Always spend 5 minutes walking or stretching before you pick up the pace to prevent injury.",
  },
  {
    title: "Stay Hydrated",
    description:
      "Drink water before, during, and after your run. Aim for at least 8oz every 20 minutes.",
  },
  {
    title: "Build Gradually",
    description:
      "Increase your weekly mileage by no more than 10% to avoid overtraining and burnout.",
  },
];

const paceOptions = [
  { value: "6", label: "Slow jog (5 mph)" },
  { value: "9", label: "Moderate run (6 mph)" },
  { value: "11", label: "Fast run (7.5 mph)" },
  { value: "13", label: "Sprint (9+ mph)" },
];

const Running = () => {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [pace, setPace] = useState("9");
  const [results, setResults] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration);
    const met = parseFloat(pace);
    if (!w || !d) return;
    const calories = Math.round((met * 3.5 * w * 0.453592 * d) / 200);
    const speedMap = { 6: 5, 9: 6, 11: 7.5, 13: 9 };
    const miles = ((speedMap[pace] * d) / 60).toFixed(2);
    const paceLabel = paceOptions.find((p) => p.value === pace)?.label || "";
    setResults({ calories, duration: d, miles, paceLabel });
  };

  return (
    <main id="running">
      <section className="page-header">
        <h1>Running</h1>
        <p>Calculate your calories burned and track your stats</p>
      </section>

      <section className="tracker-section">
        <div className="tracker-wrapper">
          <div className="tracker-form">
            <h2>Calculate Calories Burned</h2>
            <p>
              Enter your details below to estimate calories burned while
              running.
            </p>

            <div className="form-group">
              <label>Weight (lbs)</label>
              <input
                type="number"
                placeholder="e.g. 160"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Duration (minutes)</label>
              <input
                type="number"
                placeholder="e.g. 30"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Pace</label>
              <select value={pace} onChange={(e) => setPace(e.target.value)}>
                {paceOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="calculate-btn" onClick={calculate}>
              Calculate
            </button>
          </div>

          <div className="tracker-results">
            <h2>Your Stats</h2>
            <div className="stat-card">
              <div className="stat-icon"></div>
              <div className="stat-info">
                <div className="stat-number">
                  {results ? results.calories : "--"}
                </div>
                <div className="stat-label">Calories Burned</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"></div>
              <div className="stat-info">
                <div className="stat-number">
                  {results ? results.duration : "--"}
                </div>
                <div className="stat-label">Minutes Running</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"></div>
              <div className="stat-info">
                <div className="stat-number">
                  {results ? results.miles : "--"}
                </div>
                <div className="stat-label">Miles Covered</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"></div>
              <div className="stat-info">
                <div className="stat-number" style={{ fontSize: "16px" }}>
                  {results ? results.paceLabel : "--"}
                </div>
                <div className="stat-label">Pace Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>Running Tips</h2>
        <div className="tips-grid">
          {tips.map((tip) => (
            <TipCard
              key={tip.title}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Running;
