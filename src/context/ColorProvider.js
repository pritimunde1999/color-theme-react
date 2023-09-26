import { useState,useEffect } from "react";
import ColorContext from "./ColorContext";

const day ={
    id: "day",
    color : "black",
    background : "white",
    border: "1px solid black"
}

const night ={
    id: "night",
    color : "white",
    background : "black",
    border: "1px solid white"
}
const ColorProvider = (props) =>{
    const[theme,setTheme] = useState(day)
   
    useEffect(()=>{
        const savedItem = localStorage.getItem("themeId");

        if(savedItem === "night")
        {
            setTheme(night);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("themeId",theme.id);
    },[theme])

    return(
        <ColorContext.Provider value={{theme:theme,
        day: ()=> setTheme(day),
        night: ()=> setTheme(night)
        }}>
            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;