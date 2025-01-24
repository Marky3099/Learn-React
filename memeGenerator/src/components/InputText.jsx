
export default function InputText(props){
    return (
        <div className="input-field">
            <label htmlFor="inputText" className="input-label">{props.title} Text</label>
            <input id="inputText" type="text" className="input-text" name={props.name} />
        </div>
    )
}