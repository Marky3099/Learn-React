/* eslint-disable react/prop-types */

export default function ImageMeme({src, alt}){
    return (
        <div className="meme-container">
            <div className="image-meme">
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}