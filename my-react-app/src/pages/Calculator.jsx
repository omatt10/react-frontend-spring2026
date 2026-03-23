import CalcCard from "../components/CalcCard.jsx";
import "../css/Calculator.css";

const calculators = [
  {
    image: "./images/bodyMassIndex.webp",
    title: "BMI",
    description: "Body Mass Index calculator",
  },
  {
    image: "./images/body-fat-percentage.jpg",
    title: "Body Fat %",
    description: "Estimate body fat percentage",
  },
  {
    image: "./images/BMR.webp",
    title: "Basal Metabolic Rate",
    description: "Calculate your BMR",
  },
  {
    image: "./images/protein-intake-calculator.webp",
    title: "Protein Intake Calculator",
    description: "Calculate your daily protein",
  },
  {
    image: "./images/Lean Body Mass.webp",
    title: "Lean Body Mass",
    description: "Calculate lean body mass",
  },
  {
    image: "./images/TDEE.webp",
    title: "Total Daily Energy Expenditure",
    description: "Calculate your TDEE",
  },
];

const Calculator = () => {
  return (
    <main id="calculator">
      <section className="page-header">
        <h1>Health Calculators</h1>
        <p>Choose a calculator to track your health metrics</p>
      </section>

      <section className="calculator-grid">
        {calculators.map((calc) => (
          <CalcCard
            key={calc.title}
            image={calc.image}
            title={calc.title}
            description={calc.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Calculator;
