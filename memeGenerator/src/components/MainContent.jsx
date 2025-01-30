import { useState, useEffect } from "react";
import Form from "./Form";
import ImageMeme from "./ImageMeme";

export default function MainContent(){
    const [meme, setMeme] = useState({
        topText: "Sample Top",
        bottomText: "Sample Bottom",
        src: "/src/assets/images/meme.jpg",
        alt: "meme"
    });
    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            setAllMemeImages(data.data.memes)
        });
    },[])

    function handleChange(event){
        const { name, value } = event.target;
        setMeme(current => ({
            ...current,
            [name]: value
        }))
    }
    function handleGenerate(event){
        event.preventDefault();
        
        const randomMemeImage = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url;

        setMeme(current => ({
            ...current,
            src: randomMemeImage
        }))
    }

    return (
        <main>
            <Form 
                onSubmit={handleGenerate}
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