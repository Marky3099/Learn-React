import InputText from "./InputText";
import ImageIcon from "../assets/image-icon.svg";

export default function Form({onChange}){
    return (
        <form>
            <div className="input-meme">
                <InputText 
                    title="Top"
                    placeholder= "Sample Top"
                    name="topText"
                    onChange={onChange}
                />
                <InputText 
                    title="Bottom"
                    placeholder="Sample Bottom"
                    name="bottomText"
                    onChange={onChange}
                />
            </div>
            <div className="submit-btn">
                <button className="submit">Get a new meme image <img src={ImageIcon}/></button>
            </div>
            </form>
    )
}