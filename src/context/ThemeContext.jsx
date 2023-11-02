"use client";

const { createContext, useState, useEffect } = require("react");

export const context = createContext();

const getFromLocalStorage = () =>
{   
    if(typeof window !== "undefined")
    {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

export const ThemeContext =({children})=>{

    const [theme, setTheme] = useState(() => getFromLocalStorage());


    const toggle = () =>
    {
        setTheme(()=> theme === "light" ? "dark" : "light");
    }

    useEffect(()=>
    {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
    <context.Provider value={{theme, toggle}}>
        {children}
    </context.Provider>
    )
}