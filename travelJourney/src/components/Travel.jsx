
export default function Travel(props){
    const {img, country, link, title, date, text} = props;
    return (
        <>
            <article className="article">
                <img src={img.src} alt={img.alt} className="travel-img"/>
                <section className="travel-content">
                    <div className="travel-loc">
                        <img src="/src/assets/images/marker.png" alt="marker" className="marker"/>
                        <p className="travel-country">{country}</p>
                        <a href={link} className="travel-link" target="_blank">View on Google Maps</a>
                    </div>
                    <h1 className="travel-title">{title}</h1>
                    <h3 className="travel-date">{date}</h3>
                    <p className="travel-text">{text}</p>
                </section>
            </article>
        </>
    )
}