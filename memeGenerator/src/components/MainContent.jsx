// import { useState } from "react";
import Form from "./Form";
import ImageMeme from "./ImageMeme";

export default function MainContent(){
    // const [meme, setMeme] = useState({});

    return (
        <main>
            <Form />
            <ImageMeme 
                src="/src/assets/images/meme.jpg"
                alt ="meme"
            />
        </main>
    )
}