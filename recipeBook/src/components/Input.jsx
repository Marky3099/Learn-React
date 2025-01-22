import { useState } from "react";

export default function Input(){

    const [ingredients, setIngredients] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ingredientInput = formData.get("ingredient");
        setIngredients( currentIngredient => [...currentIngredient, ingredientInput]);
    };
    const listIngredient = ingredients.map( ingredient => (
        <li>{ingredient}</li>
    ));
    return (
        <>
            <div className="input-bar">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="e.g Pork Steak" name="ingredient" className="input"/>
                    <button className="submit">+ Add ingredient</button>
                </form>
            </div>
            <div className="list-ingredients">
                {listIngredient.length > 0 && <h3>Ingredients on Hand:</h3>}
                <ul>
                    {listIngredient}
                </ul>
            </div>
            <div className="ready">
                <div className="ready-first-content">
                    <div className="ready-first-title">
                        <h3>Ready for a recipe?</h3>
                    </div>
                    <div className="ready-first-content">
                        <p>Generate a recipe using AI</p>
                    </div>
                </div>
                <div className="ready-second-content">
                    <button> Get a Recipe</button>
                </div>
            </div>
        </>
    )
}