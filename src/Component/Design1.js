import React, { useContext } from "react";
import ColorContext from "../context/ColorContext";




const Design1 = () => {
    const { theme, day,night } = useContext(ColorContext);

    function toggle(){
        theme.id==="day" ? night() : day()
    }

    return (
        <div>
            <div style={{
                color: theme.color,
                backgroundColor: theme.background,
                border: theme.border
            }}>
                <h1>Priti Munde</h1>
                <h2>Software Developer</h2>
                <button>visit</button>
            </div>
            {/* <button onClick={day}>Day Theme</button>
            <button onClick={night}>Night Theme</button> */}
            <button onClick={toggle}>Toggle theme</button>
        </div>
    )
}

export default Design1;