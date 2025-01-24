
export default function ListIngredients(props){

    const listIngredient = props.ingredients.map( ingredient => (
        <li>{ingredient}</li>
    ));

    return (
        <>
            <div className="list-ingredients">
                <h3>Ingredients on Hand:</h3>
                <ul>
                    {listIngredient}
                </ul>
            </div>
            {listIngredient.length > 2 && 
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
                        <button onClick={props.handleGetRecipe}> Get a Recipe</button>
                    </div>
                </div>
            }
        </>
    )
}