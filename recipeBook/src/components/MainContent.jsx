import InputIngredient from "./InputIngredient";
import { useState } from "react";
import RecipeCode from "./RecipeCode";
import ListIngredients from "./ListIngredients";

export default function MainContent(){

    const [ingredients, setIngredients] = useState([]);
    const [isShown, setIsShown] = useState(false);
    
    function handleGetRecipe(){
        setIsShown(!isShown);
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
            {isShown && <RecipeCode />} 
        </main>
    )   
}