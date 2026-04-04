import Recipes from "./components/RecipeCard"; 
import { useState, useEffect } from "react"; 

const Listings = () => {
    const [recipes, setRecipes] = useState([]);

    //after the page has loaded
    useEffect(() => {
        const RecipeCard = async () => {
            const response = await axios.get("http://localhost:3001/components/RecipeCard");
            console.log(response.data);
        };

        RecipeCard(); 
    },{});

    return (
        <main id="listings" className="main-content">
            <h2>Recipe Listings</h2>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <Recipes key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </main>
    );
};

export default Listings;