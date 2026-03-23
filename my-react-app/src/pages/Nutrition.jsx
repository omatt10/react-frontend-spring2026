import NutritionCard from "../components/NutritionCard.jsx";
import "../css/Nutrition.css";

const nutritionItems = [
  {
    image: "./images/recipes.png",
    title: "Recipes",
    description: "Find and explore healthy meals to reach your goals.",
    linkTo: "/nutrition/recipes",
  },
  {
    image: "./images/meal planning.png",
    title: "Meal Planner",
    description: "Plan your weekly meals to stay on track.",
  },
  {
    image: "./images/macro log.png",
    title: "Macro Tracker",
    description: "Easily track the contents of macros.",
  },
];

const Nutrition = () => {
  return (
    <main id="nutrition">
      <section className="page-header">
        <h1>Nutrition</h1>
        <p>Fuel your body the right way to reach your goals</p>
      </section>

      <section className="nutrition-grid">
        {nutritionItems.map((item) => (
          <NutritionCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            linkTo={item.linkTo}
          />
        ))}
      </section>
    </main>
  );
};

export default Nutrition;
