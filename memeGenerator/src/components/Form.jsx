import InputText from "./InputText";
import ImageIcon from "../assets/image-icon.svg";

export default function Form(){
    return (
        <form>
            <div className="input-meme">
                <InputText 
                    title="Top"
                    name="topText"
                />
                <InputText 
                    title="Bottom"
                    name="bottomText"
                />
            </div>
            <div className="submit-btn">
                <button className="submit">Get a new meme image <img src={ImageIcon}/></button>
            </div>
            </form>
    )
}