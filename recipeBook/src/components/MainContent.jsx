import InputIngredient from "./InputIngredient";
import { useState } from "react";
import RecipeCode from "./RecipeCode";
import ListIngredients from "./ListIngredients";
import { getRecipeFromMistral } from '../../ai';

export default function MainContent(){

    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    
    async function handleGetRecipe(){
        const recipeData = await getRecipeFromMistral(ingredients);
        setRecipe(recipeData)
        
    }

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ingredientInput = formData.get("ingredient");
        setIngredients( currentIngredient => [...currentIngredient, ingredientInput]);
    };

    return (
        <main>
            <InputIngredient 
                handleSubmit= {handleSubmit}
            />
            {
                ingredients.length > 0 &&  <ListIngredients 
                    ingredients = {ingredients}
                    handleGetRecipe = { handleGetRecipe }
                /> 
            }
            {recipe && <RecipeCode recipe={recipe}/>} 
        </main>
    )   
}