import { useEffect, useState } from "react"

export default function Window(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        function watchWindowWidth(){
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", watchWindowWidth);
        return () => window.removeEventListener("resize",watchWindowWidth);
    },[])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}