"use client";

import { context } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";



export default function ThemeProvider({children}) {

    const {theme} = useContext(context);
    const [mounted, setMounted] = useState(false);

    useEffect(()=>
    {
        setMounted(true)
        console.log("Mounted")
    }, [])

    if(mounted)
    {
        return (
          <div className={theme}>
              {children}
          </div>
        )
    }
}
