import React, {useContext} from 'react';
import {ThemeContext} from "./themecontext.jsx";
import {BsSun, BsSunFill} from "react-icons/bs";

function Button(props) {
    const {handelToggleIcon,isDarkTheme} = useContext(ThemeContext)
    console.log(handelToggleIcon,isDarkTheme)
    return (
        <>
            {
                isDarkTheme ? <BsSun size={32} onClick={handelToggleIcon}/> : <BsSunFill size={32} onClick={handelToggleIcon}/>
            }

        </>
    );
}

export default Button;