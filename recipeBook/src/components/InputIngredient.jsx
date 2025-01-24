
export default function Input(props){

    return (
        <>
            <div className="input-bar">
                <form onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="e.g Pork Steak" name="ingredient" className="input"/>
                    <button className="submit">+ Add ingredient</button>
                </form>
            </div>
            
        </>
    )
}