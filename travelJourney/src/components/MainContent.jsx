import Travel from "./Travel";
import Data from "../../data";

export default function MainContent(){
    const travelData = Data.map( travel => {
        return <Travel 
        key={travel.id}
        img={travel.img}
        country= {travel.country}
        link= {travel.googleMapsLink}
        title= {travel.title}
        date= {travel.dates}
        text= {travel.text}
    />
    })
    return (
        <main>
            {travelData}
            
        </main>
    )
}