/* eslint-disable react/prop-types */

export default function ImageMeme({src, alt, topText, bottomText}){
    return (
        <div className="meme-container">
            <div className="image-meme">
                <img src={src} alt={alt} />
                <span className="top-text">{topText}</span>
                <span className="bottom-text">{bottomText}</span>
            </div>
        </div>
    )
}