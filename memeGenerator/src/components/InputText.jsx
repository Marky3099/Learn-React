
// eslint-disable-next-line react/prop-types
export default function InputText({title, name}){
    return (
        <div className="input-field">
            <label htmlFor="inputText" className="input-label">{title} Text</label>
            <input id="inputText" type="text" className="input-text" name={name} />
        </div>
    )
}