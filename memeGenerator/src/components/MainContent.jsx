import { useState } from "react";
import Form from "./Form";
import ImageMeme from "./ImageMeme";

export default function MainContent(){
    const [meme, setMeme] = useState({
        topText: "Sample Top",
        bottomText: "Sample Bottom",
        src: "/src/assets/images/meme.jpg",
        alt: "meme"
    });
    function handleChange(event){
        const { name, value } = event.target;
        setMeme(current => ({
            ...current,
            [name]: value
        }))
    }
    // function handleGenerate(event){
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const topText = formData.get("topText");
    //     const bottomText = formData.get("bottomText");
        
    //     setMeme({
    //         topText: topText,
    //         bottomText: bottomText,
    //         src: "/src/assets/images/meme.jpg",
    //         alt: "meme"
    //     })
    // }

    return (
        <main>
            <Form 
                // onSubmit={handleGenerate}
                onChange={handleChange}
            />
            <ImageMeme 
                src={meme.src}
                alt ={meme.alt}
                topText={meme.topText}
                bottomText={meme.bottomText}
            />
        </main>
    )
}