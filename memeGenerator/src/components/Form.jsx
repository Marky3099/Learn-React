import InputText from "./InputText";
import ImageIcon from "../assets/image-icon.svg";

export default function Form({title}){
    return (
            <form>
                <InputText 
                    title="Top"
                    name="topText"
                />
                <InputText 
                    title="Bottom"
                    name="bottomText"
                />
                <button className="submit">Get a new meme image <img src={ImageIcon}/></button>
            </form>
    )
}