import React, { useState,useEffect } from "react";
import { useRef } from "react/cjs/react.development";

const Router = ({path, children}) => {
    const[currentPath,setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',onLocationChange)

        return () => {
            window.removeEventListener('popstate',onLocationChange)
        }
    },[])
    return currentPath === path
    ? children
    : null;
}

export default Router;