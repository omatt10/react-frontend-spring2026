import RecipeCard from "../components/RecipeCard.jsx";
import "../css/Recipes.css";

const recipes = [
  {
    id: 1,
    category: "High Protein",
    title: "Grilled Chicken & Quinoa Bowl",
    description:
      "A balanced meal packed with lean protein and complex carbs to fuel your workouts.",
    calories: 480,
    protein: 42,
    carbs: 38,
    fat: 12,
    time: "25 min",
  },
  {
    id: 2,
    category: "Low Carb",
    title: "Salmon with Roasted Vegetables",
    description:
      "Omega-3 rich salmon paired with colorful roasted veggies for a nutrient-dense dinner.",
    calories: 410,
    protein: 35,
    carbs: 18,
    fat: 22,
    time: "30 min",
  },
  {
    id: 3,
    category: "Breakfast",
    title: "Greek Yogurt Parfait",
    description:
      "Creamy Greek yogurt layered with fresh berries and granola for a quick morning boost.",
    calories: 320,
    protein: 20,
    carbs: 45,
    fat: 6,
    time: "5 min",
  },
  {
    id: 4,
    category: "Vegan",
    title: "Chickpea & Spinach Curry",
    description:
      "A hearty plant-based curry loaded with fiber, iron, and bold flavors.",
    calories: 370,
    protein: 16,
    carbs: 52,
    fat: 9,
    time: "35 min",
  },
  {
    id: 5,
    category: "Snack",
    title: "Peanut Butter Energy Bites",
    description:
      "No-bake bites made with oats, peanut butter, and honey — perfect pre-workout fuel.",
    calories: 210,
    protein: 8,
    carbs: 24,
    fat: 10,
    time: "10 min",
  },
  {
    id: 6,
    category: "High Protein",
    title: "Turkey & Avocado Wrap",
    description:
      "A satisfying wrap filled with lean turkey, creamy avocado, and crisp veggies.",
    calories: 440,
    protein: 38,
    carbs: 32,
    fat: 16,
    time: "10 min",
  },
];

const Recipes = () => {
  return (
    <main id="recipes">
      <section className="page-header">
        <h1>Healthy Recipes</h1>
        <p>Simple and nutritious meals to fuel your goals</p>
      </section>

      <section className="recipes-grid-section">
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              category={recipe.category}
              title={recipe.title}
              description={recipe.description}
              calories={recipe.calories}
              protein={recipe.protein}
              carbs={recipe.carbs}
              fat={recipe.fat}
              time={recipe.time}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Recipes;
