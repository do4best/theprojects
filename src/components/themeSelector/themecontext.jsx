import React, {createContext, useContext, useEffect, useState} from 'react';


const themes ={
    dark:{
        backgroundColor:"#000000",
        color : "#ffffff"
    },
    light:{
        backgroundColor: "#ffffff",
        color : "#000000"
    }
}
const initialState ={
    theme : themes.light,
    handelToggle : () =>{},
    isDarkTheme : false
}






const ThemeContext = createContext("our theme object")

const ThemeProvider = ({children}) =>{

    const [isDarkTheme,setIsDarkTheme] = useState(false)
    useEffect(() => {
        const extraDarkThemeFlag = JSON.parse(localStorage.getItem('isDarkTheme'))
        setIsDarkTheme(extraDarkThemeFlag !== null ? extraDarkThemeFlag : false)
    }, []);
    const handelToggleIcon=()=>{
        const updateDarkTheme  = !isDarkTheme;
        localStorage.setItem(isDarkTheme,JSON.stringify(updateDarkTheme))
        setIsDarkTheme(updateDarkTheme)
    }
    const theme = isDarkTheme ? themes.dark : themes.light;
    return(
        <ThemeContext.Provider value={{theme,handelToggleIcon,isDarkTheme}}>
            {children}
        </ThemeContext.Provider>

            )
            }




export  {ThemeProvider,ThemeContext}