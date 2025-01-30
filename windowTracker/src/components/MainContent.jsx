import { useState } from "react";
import Window from "./Window";

export default function MainContent(){
    const [isShow, setIsShow] = useState(true);

    function handleToggle(){
        setIsShow(show => !show);
    }

    return (
        <main>
            <button onClick={handleToggle}> Toggle Window Tracker</button>
            {isShow && <Window />}
        </main>
    )
}